import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomersService } from '../service/customers.service';


@Controller('api/v1/customers')
@ApiTags('Customers')

export class CustomersController {
  constructor(private readonly customersService : CustomersService){}

  @Get('customers')
  @ApiOperation({ summary: 'Get all customers' })

  async getCustomers(){
    return await this.customersService.getAllCustomers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get balance' })

  async getBalanceById(@Param('id') id: string): Promise<any>{
    return `customer balance by id`
  }

  
}