import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostPixDto } from './dto/post-pix.dto';


@Controller('api/v1/pix')
@ApiTags('Pix')
export class PixController {

  @Post('pix')
  @ApiOperation({ summary: 'transfer pix ' })

  async getCustomers(
    @Body() postPixDto: PostPixDto,
  ): Promise<any>{
    return `transição pix ${postPixDto}`
  }

  @Get('actividades')
  @ApiOperation({ summary: 'Get all actividades pix' })

  async getActividades(): Promise<any>{
    return `todas as atividades `
  }
}