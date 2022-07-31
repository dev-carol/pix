import { Module } from '@nestjs/common';
import { customersModule } from './customers/module/customers.module';
import { pixModule } from './pix/module/pix.module';

@Module({
  imports: [customersModule, pixModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
