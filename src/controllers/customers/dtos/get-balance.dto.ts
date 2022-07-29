import { ApiProperty } from "@nestjs/swagger";

export class GetBalanceDto {
    @ApiProperty()
    balance: string;
    
  }