import { InjectModel, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Model, Types } from "mongoose";

@Schema()
export class Accounts extends Document {


    @Prop({
        unique: true,
        index:true,
    })
    name: string;
    @Prop({
        unique: true,
        index:true,
    })
    NIT: string;
    @Prop({
        unique: true,
        index:true,
    })
    nameContact: string;
    @Prop({
        unique: true,
        index:true,
    })
    bank: string;
    @Prop({
        unique: true,
        index:true,
    })
    accountsNumber: string;
    @Prop({
        unique: true,
        index:true,
    })
    phone: number;
}

export const AccountsSchema = SchemaFactory.createForClass(Accounts);
console.log(Accounts.name);