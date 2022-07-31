
import { Module } from '@nestjs/common';
import { PixController } from 'src/pix/controllers/pix.controller';

@Module({
  imports: [],
  controllers: [PixController],
  providers: [],
})
export class pixModule {}
