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
  @ApiOkResponse({type: GetCustomersDto, description:"Total list of customers successfully obtained"})
  @ApiOperation({ summary: 'Get all customers' })

  async getCustomers(){
    return await this.customersService.getAllCustomers();
  }
  
  @Get(':costumerId')
  @UseFilters(new HttpExceptionFilter())
  @ApiOkResponse({description:"Checking the Balance Obtained"})
  @ApiOperation({ summary: 'Get balance' })
  @ApiParam({
    name: 'costumerId',
    required: true,
    example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx',
  })
  async getBalance(@Param('costumerId')costumerId: string){
    return await this.customersService.getBalance(costumerId);
  }

  
}