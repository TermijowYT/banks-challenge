import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Accounts, AccountsSchema } from './entities/account.entity';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
  imports: [MongooseModule.forFeature([
      {
        name: Accounts.name,
        schema: AccountsSchema
      }
    ])
  ]
})
export class AccountModule {}
