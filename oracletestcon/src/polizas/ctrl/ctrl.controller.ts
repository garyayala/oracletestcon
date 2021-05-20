import { Controller, Get, Query } from '@nestjs/common';
import { SvcService } from '../svc/svc.service';
import { PolizaFilterDto } from '../dto/poliza-filter.dto';

@Controller('polizas')
export class CtrlController {
  constructor(private readonly svc: SvcService) {}

  @Get()
  async find(@Query() payload: PolizaFilterDto): Promise<string> {
    return this.svc.find(payload);
  }
}
