import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BankingService } from '../../services/banking.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [BankingService],
})
export class transctionsModule {}
