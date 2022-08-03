
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PixController } from 'src/pix/controllers/pix.controller';
import { PixSchema } from '../schemas/pix.schema';
import { PixService } from '../service/pix.service';

@Module({
  imports: [HttpModule,
  MongooseModule.forFeature([{
    name: 'Pix',
    schema: PixSchema
  }])],
  controllers: [PixController],
  providers: [PixService],
})
export class pixModule {}
