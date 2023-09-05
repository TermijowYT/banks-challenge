import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './entities/account.entity';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
  imports: [MongooseModule.forFeature([
      {
        name: Account.name,
        schema: AccountSchema
      }
    ])
  ]
})
export class AccountModule {}
