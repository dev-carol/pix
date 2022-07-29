import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable } from '@nestjs/common';
import { lastValueFrom, Observable } from 'rxjs';


@Injectable()
export class BankingService {
  constructor(private readonly httpService: HttpService){}




  }