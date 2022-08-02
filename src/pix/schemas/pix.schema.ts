import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {v4 as uuidV4} from 'uuid'

@Schema()

export class Pix extends Document{
   @Prop({
      type: String,
      default: () => {
         return uuidV4();
      }
   })

   @Prop({
      required: true
   })
   cpf: string

   @Prop({
      required: true
   })
   email: string

   @Prop({
      required: true
   })
   telefone: string
 
}

export const PixSchema = SchemaFactory.createForClass(Pix);