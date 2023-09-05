import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { Bank } from './entities/bank.entity';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BankService {
  constructor(
    @InjectModel(Bank.name)
    private readonly bankModel: Model<Bank>,
  ) {}

  async create(createBankDto: CreateBankDto) {
    try {
      createBankDto.name = createBankDto.name.toLocaleLowerCase();
      const banks = await this.bankModel.create(createBankDto);
      return `Se creo exitosamente el banco ${createBankDto.name}`;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `El banco: ${createBankDto.name} No se pudo crear porque ya existe`,
        );
      }
      throw new InternalServerErrorException(
        `Ocurrió un error inesperado, revisa la consola`,
      );
    }
  }

  findAll() {
    const banks = this.bankModel.find();
    return banks;
  }

  async findOne(id: string) {
    let bank: Bank;

    if (!bank && isValidObjectId(id)) {
      bank = await this.bankModel.findById(id);
    }

    if (!bank) {
      bank = await this.bankModel.findOne({ name: id.toLowerCase().trim() });
    }

    if (!bank)
      throw new NotFoundException(
        `El banco con el ID o nombre ${id} no se encontró`,
      );

    return bank;
  }

  async update(id: string, updateBankDto: UpdateBankDto) {
    const pokemon = await this.findOne(id);
    try {
      if (updateBankDto.name) {
        updateBankDto.name = updateBankDto.name.toLowerCase();

        await pokemon.updateOne(updateBankDto);
        return { ...pokemon.toJSON(), ...updateBankDto };
      }
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.bankModel.deleteOne({_id:id});
    if (deletedCount === 0) {
      throw new BadRequestException( `El objeto en la base de datos con ${id} no existe!`);
    } else { 
      return 'El banco se eliminó correctamente';
    }
  }

  async removeAll() {
    const {deletedCount} = await this.bankModel.deleteMany();
    if (deletedCount === 0) {
      throw new BadRequestException(`No hay ningun banco en la base de datos`);
    } else {
      return `Se eliminaron ${deletedCount} Bancos.`;
    }
  }
  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Este Pokemon ya existe en la base de datos ${JSON.stringify(
          error.keyValue,
        )}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(
      `No se pudo crear el pokemon, revisa los logs del servidor`,
    );
  }
}
