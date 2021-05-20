import { Connection } from 'typeorm';
import { Poliza } from './poliza.entity';
import { DATABASE_PROVIDER } from 'src/database/constants/constants';
import { POLIZA_REPOSITORY } from '../constants/constants';

export const polizaProviders = [
  {
    provide: POLIZA_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Poliza),
    inject: [DATABASE_PROVIDER],
  },
];
