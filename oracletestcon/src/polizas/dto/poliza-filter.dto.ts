import { IsNumberString } from 'class-validator';

export class PolizaFilterDto {
  @IsNumberString()
  poliza: string;
}
