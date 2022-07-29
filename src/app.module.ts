import { Module } from '@nestjs/common';
import { ActividadesController } from './controllers/actividades/activades.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { PixController } from './controllers/pix/pix.controller';
import { transctionsModule } from './modules/banking/banking.module';

@Module({
  imports: [transctionsModule, ],
  controllers: [ActividadesController, CustomersController, PixController],
  providers: [],
})
export class AppModule {}
