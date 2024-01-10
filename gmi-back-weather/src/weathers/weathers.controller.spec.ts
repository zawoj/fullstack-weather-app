import { Test, TestingModule } from '@nestjs/testing';
import { WeathersController } from './weathers.controller';
import { WeathersService } from './weathers.service';
import { HttpModule } from '@nestjs/axios';
import { ApiKeyGuard } from '../auth/guards/apikey.guard';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

describe('WeathersController', () => {
  let controller: WeathersController;

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

    controller = module.get<WeathersController>(WeathersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
