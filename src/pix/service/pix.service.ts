
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Itransitions } from "../interface/transitions.interface";



@Injectable()
export class PixService{
    constructor( private readonly httpService: HttpService){}

    async getAllTransitions(){
        let transitions: Itransitions[] = [];

        const url = 'https://run.mocky.io/v3/c3bdfbf6-d789-4e52-829c-bddbb886c3be'
       const {status, data} = await this.httpService.get<Itransitions[]>(url).toPromise();

       if( status === 200){
        transitions = data;
       }

       return transitions;
    }
}