
import { ApiProperty } from '@nestjs/swagger';
import {Document} from 'mongoose'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class PostPixDto  extends Document{

    @ApiProperty({description: 'Enter the customer cpf' , example: '00000000000'})
    @IsNotEmpty({ message: 'CPF required' })
    @IsString({ message: 'It has to be of type string' })
    cpf = '';

    @ApiProperty({description: 'Enter the customer email', example: 'joana.santos@gmail.com'})
    @IsNotEmpty({ message: 'Email required' })
    @IsEmail({ message: 'It has to be of type string' })
    email= '';

    @ApiProperty({description: 'Enter the customer telefone', example: '+55000000000002'})
    @IsNotEmpty({ message: 'Telephone required' })
    @IsString({ message: 'It has to be of type string' })
    telefone= '';
    
  }