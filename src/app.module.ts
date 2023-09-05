import { Module } from '@nestjs/common';
import { BankModule } from './bank/bank.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';
import { CustomNumberValidator } from './custom-number-validator/custom-number-validator.controller';


@Module({
  imports: [BankModule,
  MongooseModule.forRoot('mongodb://localhost:27017/bank-challenge'),
  AccountModule
  ],
  controllers: [CustomNumberValidator],
  providers: [],
})
export class AppModule {}
