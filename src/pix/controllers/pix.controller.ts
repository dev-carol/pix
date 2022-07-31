import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostPixDto } from '../../pix/controllers/dto/post-pix.dto';
import { PixService } from '../service/pix.service';


@Controller('api/v1/pix')
@ApiTags('Pix')
export class PixController {
  constructor(private readonly pixService : PixService){}
  @Post('pix')
  @ApiOperation({ summary: 'transfer pix ' })

  async getCustomers(
    @Body() postPixDto: PostPixDto,
  ): Promise<any>{
    return `transição pix ${postPixDto}`
  }

  @Get('transactions')
  @ApiOperation({ summary: 'All transactions waiting  for reprocessing' })

  async getTransactions(): Promise<any>{
    return await this.pixService.getAllTransitions();
  }
}