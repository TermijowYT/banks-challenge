import { InjectModel, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Model, Types } from "mongoose";

@Schema()
export class Account extends Document {


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
    accountNumber: string;
    @Prop({
        unique: true,
        index:true,
    })
    phone: number;
}

export const AccountSchema = SchemaFactory.createForClass(Account);