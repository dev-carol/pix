import { ApiProperty } from "@nestjs/swagger";

export class PostPixDto {
    @ApiProperty()
    cpf: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    telefone: string;
    
  }