
import { ApiProperty } from '@nestjs/swagger';
import {Document} from 'mongoose'

export class GetCustomersDto  extends Document{

    @ApiProperty({description: 'Customer ID' , example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx'})
    customerID = '';

    @ApiProperty({description: 'Customer agency ', example: '0000'})
    agency= '';

    @ApiProperty({description: 'Customer account', example: '00000-0'})
    account= '';

  }