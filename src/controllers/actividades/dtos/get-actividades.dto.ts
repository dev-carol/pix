import { ApiProperty } from "@nestjs/swagger";

export class GetActividadesDto {
    @ApiProperty()
    customerID: string;
  
    @ApiProperty()
    email: string;

    @ApiProperty()
    key: string;

    @ApiProperty()
    value: number;
    
    @ApiProperty()
    bank: string;
    
  }