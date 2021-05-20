import { Module } from '@nestjs/common';
import { PolizasModule } from './polizas/polizas.module';
import { DatabaseModule } from './database/database.module';
import { ConfigurationModule } from './configuration/configuration.module';

@Module({
  imports: [PolizasModule, DatabaseModule, ConfigurationModule],
})
export class AppModule {}
