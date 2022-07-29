import { ApiProperty } from "@nestjs/swagger";

export class GetCustomersDto {
    @ApiProperty()
    customerID: string;
  
    @ApiProperty()
    agency: string;

    @ApiProperty()
    account: string;
    
  }