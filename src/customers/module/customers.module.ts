import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CustomersController } from 'src/customers/controllers/customers.controller';

@Module({
  imports: [HttpModule],
  controllers: [CustomersController],
  providers: [],
})
export class customersModule {}
