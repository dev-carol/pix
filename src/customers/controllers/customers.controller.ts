import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/utils/http-exeception';
import { CustomersService } from '../service/customers.service';
import { GetCustomersDto } from './dto/get-customer.dto';


@Controller('api/v1/customers')
@ApiTags('Customers')

export class CustomersController {
  constructor(private readonly customersService : CustomersService){}

  @Get('customers')
  @UseFilters(new HttpExceptionFilter())
  @ApiOkResponse({type: GetCustomersDto})
  @ApiOperation({ summary: 'Get all customers' })

  async getCustomers(){
    return await this.customersService.getAllCustomers();
  }
  
  @Get('balance')
  @UseFilters(new HttpExceptionFilter())
  @ApiOperation({ summary: 'Get balance' })

  async getBalance(){
    return await this.customersService.getBalance();
  }

 
  
}