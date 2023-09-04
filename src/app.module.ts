import { Module } from '@nestjs/common';
import { BankModule } from './bank/bank.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [BankModule,
  MongooseModule.forRoot('mongodb://localhost:27017/bank-challenge')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
