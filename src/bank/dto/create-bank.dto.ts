import { IsString, Length } from "class-validator";

export class CreateBankDto {
    
    @IsString()
    @Length(4,50)
    name: string;
}
