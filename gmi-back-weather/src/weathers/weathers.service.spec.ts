import { Test, TestingModule } from '@nestjs/testing';
import { WeathersService } from './weathers.service';
import { HttpModule } from '@nestjs/axios';
import { WeathersController } from './weathers.controller';
import { ApiKeyGuard } from '../auth/guards/apikey.guard';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

describe('WeathersService', () => {
  let service: WeathersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [WeathersController],
      providers: [
        WeathersService,
        ApiKeyGuard,
        { provide: CACHE_MANAGER, useValue: {} },
      ],
    }).compile();

    service = module.get<WeathersService>(WeathersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
