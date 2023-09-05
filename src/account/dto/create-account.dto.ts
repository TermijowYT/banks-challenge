import { IsOptional, IsString, Length, MaxLength, Validate } from "class-validator";
import { CustomNumberValidator } from "src/custom-number-validator/custom-number-validator.controller";

export class CreateAccountDto {
    @IsString()
    @Length(3-50)
    name: string;
    @IsString()
    @Validate(CustomNumberValidator)
    NIT: string;
    @IsString()
    @Length(3-50)
    nameContact: string;
    @IsString()
    @Length(3-50)
    bank: string;
    @MaxLength(15)
    @IsOptional()
    accountNumber?: string;
    @Length(10)
    @IsOptional()
    phone?: string;
}
