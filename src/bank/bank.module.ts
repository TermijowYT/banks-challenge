import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bank, BankShema } from './entities/bank.entity';

@Module({
  controllers: [BankController],
  providers: [BankService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Bank.name,
        schema: BankShema,
      }
    ])
  ]
})
export class BankModule {}
