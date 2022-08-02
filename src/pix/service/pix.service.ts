
import { HttpService } from "@nestjs/axios";
import { HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Itransitions } from "../interface/transitions.interface";
import { Model } from 'mongoose';
import { Pix } from "../schemas/pix.schema";


@Injectable()
export class PixService{
    constructor(
     @InjectModel('Pix') private readonly pixModel: Model<Pix>,
     private readonly httpService: HttpService){}

    async getAllTransitions(){
        let transitions: Itransitions[] = [];

       const url = 'https://run.mocky.io/v3/c3bdfbf6-d789-4e52-829c-bddbb886c3be'
       const {status, data} = await this.httpService.get<Itransitions[]>(url).toPromise();

       if( status === HttpStatus.OK){
        transitions = data;
       }

       return transitions;
    }

    async sendPixCustomer (pix: Pix){

       const sendPix = await new this.pixModel(pix).save();

       if(!sendPix) {
            throw new InternalServerErrorException({
                status: 500,
                title: 'Could not send pix',
                description: 
                'pix cannot be sent, make sure all fields are filled out correctly '
            })
       }
       return sendPix;
    }

    async getPixId(pixId: string): Promise<Pix> {
        const pixCostumerId = await this.pixModel.findById(pixId).exec();
    
        if (!pixCostumerId) {
          throw new NotFoundException({
            status: 404,
            title: 'Pix Not Found',
            description: [
              'Pix costumer Id not found, this problem is probably caused by the pixel not being processed',
              `The costumer id: ${pixCostumerId} was not found`,
            ],
          });
        }
    
        return pixCostumerId;
      }

    
}