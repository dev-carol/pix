import { Body, Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetActividadesDto } from './dtos/get-actividades.dto';

@Controller('api/v1/actividades')
@ApiTags('Actividades')
export class ActividadesController {

  @Get('actividades')
  @ApiOperation({ summary: 'Get all actividades' })

  async getActividades(
    @Body() getActividades: GetActividadesDto,
  ): Promise<any>{
    return `todas as atividades ${getActividades}`
  }
}