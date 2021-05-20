import { Module } from '@nestjs/common';
import { CtrlController } from './ctrl/ctrl.controller';
import { SvcService } from './svc/svc.service';
import { databaseProviders } from 'src/database/database.provider';
import { DatabaseModule } from 'src/database/database.module';
import { polizaProviders } from './entity/poliza.provider';
import { ConfigurationModule } from 'src/configuration/configuration.module';

@Module({
  imports: [DatabaseModule, ConfigurationModule],
  controllers: [CtrlController],
  providers: [SvcService, ...databaseProviders, ...polizaProviders],
})
export class PolizasModule {}
