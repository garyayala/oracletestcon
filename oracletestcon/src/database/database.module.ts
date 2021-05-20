import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { DATABASE_PROVIDER } from './constants/constants';
import { ConfigurationModule } from 'src/configuration/configuration.module';

@Module({
  imports: [ConfigurationModule],
  providers: [...databaseProviders],
  exports: [...databaseProviders, DATABASE_PROVIDER],
})
export class DatabaseModule {}
