import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Model } from 'mongoose';
import { Account } from './entities/account.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name)
    private readonly AccountModel: Model<Account>,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    createAccountDto.name = createAccountDto.name.toLocaleLowerCase();
    createAccountDto.nameContact =
      createAccountDto.nameContact.toLocaleLowerCase();
    createAccountDto.bank = createAccountDto.bank.toLocaleLowerCase();

    try {
      const Account = await this.AccountModel.create(createAccountDto);
      return `
      Los datos se guardaron exitosamente!
      ${JSON.stringify(Account)}
      `;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {

    return this.AccountModel.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }

  handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Esta cuenta ya existe en la base de datos ${JSON.stringify(
          error.keyValue,
        )}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(
      'No se pudo crear la cuenta, revisa la respuesta del servidor',
    );
  }
}
