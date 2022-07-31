import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CustomersController } from 'src/customers/controllers/customers.controller';
import { CustomersService } from '../service/customers.service';

@Module({
  imports: [HttpModule],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class customersModule {}
