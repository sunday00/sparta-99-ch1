import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { HealthCustomIndicator } from './health.custom.indicator';

@Injectable()
export class HealthService {
  constructor(
    private configService: ConfigService,
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private custom: HealthCustomIndicator,
  ) {}
  check() {
    return this.health.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
      () => ({
        env: this.configService.get('appConfig.env'),
      }),
      () => this.custom.isHealthy(),
    ]);
  }
}
