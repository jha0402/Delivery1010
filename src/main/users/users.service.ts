import { Injectable } from '@nestjs/common';
import { User, UserRole } from './entities/user.entity';
import { CreateAccountInput, CreateAccountOutput } from './dto/create-user.dto';
import * as usersDb from 'src/mock-db/users.json';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

const usersInstance = plainToInstance(User, usersDb);

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private users: Repository<User>) {}
  async createAccount({
    name,
    email,
    password,
    role,
    address,
  }: CreateAccountInput): Promise<CreateAccountOutput> {
    try {
      const found = await this.users.findOne({ where: { email } });
      if (found) {
        return { ok: false, error: '이미 등록된 이메일입니다' };
      }
      await this.users.save(
        this.users.create({ name, email, password, role, address }),
      );
      return { ok: true };
    } catch (e) {
      return { ok: false, error: '회원가입에 실패 했습니다' };
    }
  }
}
