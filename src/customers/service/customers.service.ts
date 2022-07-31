import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ICustomers } from "../interface/customers.interface";


@Injectable()
export class CustomersService{
    constructor( private readonly httpService: HttpService){}

    async getAllCustomers(){
        let customers: ICustomers[] = [];

        const url = 'https://run.mocky.io/v3/85c286b6-e483-420f-9f2b-1ca57ae06c52'
       const {status, data} = await this.httpService.get<ICustomers[]>(url).toPromise();

       if( status === 200){
        customers = data;
       }

       return customers;
    }
}