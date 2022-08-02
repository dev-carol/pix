
import { ApiProperty } from '@nestjs/swagger';
import {Document} from 'mongoose'

export class GetTransactionsDto  extends Document{

    @ApiProperty({description: 'Customer ID' , example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx'})
    customerID = '';

    @ApiProperty({description: 'Customer email ', example: 'joana.santos@gmail.com'})
    email= '';

    @ApiProperty({description: 'Customer key', example: '00000000000'})
    key= '';

    @ApiProperty({description: 'Customer value', example: '000.00'})
    value= '';
    
    @ApiProperty({description: 'Customer bank', example: ''})
    bank= '';
    
  }