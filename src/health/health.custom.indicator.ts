import { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCustomIndicator extends HealthIndicator {
  async isHealthy() {
    return this.getStatus('updated', true, {
      date: '20231207 02:03',
      sec: process.env['sec1'] || null,
      sec2: process.env['sec2'] || null,
    });
  }
}
