import { Test, TestingModule } from '@nestjs/testing';
import * as usersDb from 'src/mock-db/users.json';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRole } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('Users service should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('사용자 회원가입', () => {
    const createAccountArgs = {
      name: 'jeonghyun',
      email: 'test@email.com',
      password: 'test.password',
      role: UserRole.Client,
      address: 'asdf123',
    };

    test('중복 회원가입 불가', async () => {
      const findResult = await usersDb.find((user) => user.id === 1);
      expect(findResult).toEqual(usersDb[0]);
    });

    test('회원가입 성공', async () => {
      const result = await service.createAccount(createAccountArgs);
      expect(result).toEqual({ ok: true });
    });

    test('예외처리 에러 반환', async () => {
      const result = await service.createAccount(createAccountArgs, true);
      expect(result).toEqual({ ok: false, error: 'error' });
    });
  });

  describe('로그인', () => {
    const loginArgs = {
      email: 'test@email.com',
      password: 'asdf123',
    };

    test('유저 데이터 없을 시 실패', async () => {
      const findResult = await usersDb.find((user) => user.id === 2);
      expect(findResult).toBeUndefined();
    });
    test('패스워드 불일치 시 실패', async () => {});
  });
});
