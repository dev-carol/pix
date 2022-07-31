
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PixController } from 'src/pix/controllers/pix.controller';
import { PixService } from '../service/pix.service';

@Module({
  imports: [HttpModule],
  controllers: [PixController],
  providers: [PixService],
})
export class pixModule {}
