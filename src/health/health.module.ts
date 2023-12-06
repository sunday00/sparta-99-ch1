import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { HealthCustomIndicator } from './health.custom.indicator';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthController],
  providers: [HealthService, HealthCustomIndicator],
})
export class HealthModule {}
