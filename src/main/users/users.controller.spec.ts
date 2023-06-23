import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
      imports: [TypeOrmModule.forFeature([User])],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('Users controller should be defined', () => {
    expect(controller).toBeDefined();
  });
});
