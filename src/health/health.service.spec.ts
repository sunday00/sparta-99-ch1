import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from './health.service';
import { createMock } from '@golevelup/ts-jest';
import { HealthCheckService } from '@nestjs/terminus';

describe('HealthService', () => {
  let service: HealthService;
  let checker: HealthCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HealthService,
        { provide: HealthCheckService, useValue: { check: jest.fn() } },
      ],
    })
      .useMocker(createMock)
      .compile();

    service = module.get<HealthService>(HealthService);
    checker = module.get<HealthCheckService>(HealthCheckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be call dep health  check service', () => {
    jest.spyOn(checker, 'check').mockResolvedValue(null);

    service.check();

    expect(checker.check).toHaveBeenCalled();
  });
});
