import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { customersModule } from './customers/module/customers.module';
import { pixModule } from './pix/module/pix.module';

@Module({
  imports: [customersModule, pixModule,
    MongooseModule.forRoot(
      `mongodb+srv://pixwill:will2022@pixwill.grmrc.mongodb.net/?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
