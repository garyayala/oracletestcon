import { Injectable, Inject } from '@nestjs/common';
import { PolizaFilterDto } from '../dto/poliza-filter.dto';
import { Poliza } from '../entity/poliza.entity';
import { Repository } from 'typeorm';
import { POLIZA_REPOSITORY } from '../constants/constants';

@Injectable()
export class SvcService {
  constructor(
    @Inject(POLIZA_REPOSITORY)
    private readonly repository: Repository<Poliza>,
  ) {}

  async find(payload: PolizaFilterDto): Promise<string> {
    const [[{ count }]] = await this.repository.query(
      `call sp_leer_poliza(${payload.poliza})`,
    );

    return +count > 0 ? 'Póliza encontrada' : 'Póliza no encontrada';
  }
}
