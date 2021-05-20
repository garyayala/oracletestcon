import { createConnection } from 'typeorm';
import { DATABASE_PROVIDER } from './constants/constants';
import { ConfigService, ConfigModule } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: DATABASE_PROVIDER,
    imports: [ConfigModule],
    useFactory: async (config: ConfigService) =>
      await createConnection({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: +config.get('DB_PORT'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      }),
    inject: [ConfigService],
  },
];
