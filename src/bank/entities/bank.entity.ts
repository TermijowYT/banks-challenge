import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Bank extends Document {
    @Prop({
        unique:true,
        index:true
    })
    name: string;
}

export const BankShema = SchemaFactory.createForClass(Bank);
