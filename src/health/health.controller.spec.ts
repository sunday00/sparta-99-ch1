import { Test, TestingModule } from '@nestjs/testing';
import { createMock } from '@golevelup/ts-jest';
import { HealthController } from './health.controller';
import { HealthCheckService } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { configModuleOption } from '../config/app.config';

describe('health controller test', () => {
  let controller: HealthController;
  let service: HealthCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [HealthCheckService],
    })
      .useMocker(createMock)
      .compile();

    controller = module.get<HealthController>(HealthController);
    jest.spyOn(service, 'check').mockResolvedValue(null);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be call service', () => {
    controller.check();

    expect(service.check).toHaveBeenCalled();
  });
});
