import { HttpService } from "@nestjs/axios";
import { HttpStatus, Injectable } from "@nestjs/common";
import { IBalance } from "src/pix/interface/balance.interface";
import { ICustomers } from "../interface/customers.interface";


@Injectable()
export class CustomersService{
    constructor( private readonly httpService: HttpService){}

    async getAllCustomers(){
        let customers: ICustomers[] = [];

        const url = 'https://run.mocky.io/v3/85c286b6-e483-420f-9f2b-1ca57ae06c52'
       const {status, data} = await this.httpService.get<ICustomers[]>(url).toPromise();

       if( status === HttpStatus.OK){
        customers = data;
       }

       return customers;
    }



    async getBalance(){
        let balance: IBalance[] = [];

        const url = 'https://run.mocky.io/v3/e0f453b7-620c-4479-839e-28ac58111fca'
       const {status, data} = await this.httpService.get<IBalance[]>(url).toPromise();

       if( status === HttpStatus.OK){
        balance = data;
       }

       return balance;
    }
}