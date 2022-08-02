import { Body, Controller, Get, Param, Post, Query, UseFilters } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/utils/http-exeception';
import { PostPixDto } from '../../pix/controllers/dto/post-pix.dto';
import { Pix } from '../schemas/pix.schema';
import { PixService } from '../service/pix.service';
import { GetTransactionsDto } from './dto/get-transactions.dto';


@ApiTags('Pix')
@Controller('api/v1/pix')
export class PixController {
  constructor(private readonly pixService : PixService){}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  @ApiOperation({ summary: 'Pixel transfers to the customer ' })
  async sendPix ( @Body() pixDto: PostPixDto): Promise<Pix>{
    return this.pixService.sendPixCustomer(pixDto);
  }

  @Get('transactions')
  @UseFilters(new HttpExceptionFilter())
  @ApiOkResponse({ type: GetTransactionsDto })
  @ApiOperation({ summary: 'All customer transactions waiting for reprocessing' })
  async getTransactions(){
    return await this.pixService.getAllTransitions();
  }


  @Get(':pixId')
  @UseFilters(new HttpExceptionFilter())
  @ApiOkResponse({ type: Pix })
  @ApiParam({
    name: 'pixId',
    required: true,
    example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx',
  })
  @ApiOperation({
    summary: 'List a specific pixel given the customer Id',
  })
  async getPixById(@Param('pixId') pixId: string): Promise<Pix> {
    return await this.pixService.getPixId(pixId);
  }

  
}