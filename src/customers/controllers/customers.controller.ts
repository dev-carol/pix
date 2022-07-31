import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@Controller('api/v1/customers')
@ApiTags('Customers')
export class CustomersController {

  @Get('customers')
  @ApiOperation({ summary: 'Get all customers' })

  async getCustomers( ): Promise<any>{
    return `todas as customers`
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get balance' })

  async getBalanceById(@Param('id') id: string): Promise<any>{
    return `customer balance by id`
  }
}