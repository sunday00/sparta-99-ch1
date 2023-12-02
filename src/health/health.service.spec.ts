import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from './health.service';
import { createMock } from '@golevelup/ts-jest';

describe('HealthService', () => {
  let service: HealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [HealthService],
    })
      .useMocker(createMock)
      .compile();

    service = module.get<HealthService>(HealthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return health message', async () => {
    const result = await service.check();

    expect(result).toHaveProperty('status');
  });
});
