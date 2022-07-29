import { Body, Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetBalanceDto } from './dtos/get-balance.dto';
import { GetCustomersDto } from './dtos/get-customers.dto';


@Controller('api/v1/customers')
@ApiTags('Customers')
export class CustomersController {

  @Get('customers')
  @ApiOperation({ summary: 'Get all customers' })

  async getCustomers(
    @Body() getCustomersDto: GetCustomersDto,
  ): Promise<any>{
    return `todas as customers ${getCustomersDto}`
  }

  
  @Get('balance')
  @ApiOperation({ summary: 'Get balance' })

  async getBalance(
    @Body() getBalanceDto: GetBalanceDto,
  ): Promise<any>{
    return `todas as customers ${getBalanceDto}`
  }
}