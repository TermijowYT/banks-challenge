import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { Bank } from './entities/bank.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BankService {

  constructor (
    @InjectModel(Bank.name)
    private readonly bankModel: Model<Bank>
  ) {}

  async create(createBankDto: CreateBankDto) {
    
    try {      
      createBankDto.name = createBankDto.name.toLocaleLowerCase();
      const banks = await this.bankModel.create(createBankDto)
      return banks;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(`El banco ${createBankDto.name} No se pudo crear porque ya existe`)  
      }
      throw new InternalServerErrorException(`Ocurrió un error inesperado, revisa la consola`)
      

    }

  }

  findAll() {
    return `This action returns all bank`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bank`;
  }

  update(id: number, updateBankDto: UpdateBankDto) {
    return `This action updates a #${id} bank`;
  }

  remove(id: number) {
    return `This action removes a #${id} bank`;
  }
}
