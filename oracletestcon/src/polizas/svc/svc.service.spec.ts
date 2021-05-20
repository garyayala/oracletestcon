import { Test, TestingModule } from '@nestjs/testing';
import { SvcService } from './svc.service';

describe('SvcService', () => {
  let service: SvcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SvcService],
    }).compile();

    service = module.get<SvcService>(SvcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
