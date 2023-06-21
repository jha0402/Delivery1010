import { Injectable } from '@nestjs/common';
import { User, UserRole } from './entities/user.entity';
import { CreateAccountInput, CreateAccountOutput } from './dto/create-user.dto';
import * as usersDb from 'src/mock-db/users.json';
import { plainToInstance } from 'class-transformer';

const usersInstance = plainToInstance(User, usersDb);

@Injectable()
export class UsersService {
  private users: User[] = usersInstance;
  createAccount(
    { name, email, password, role }: CreateAccountInput,
    error = null,
  ) {
    try {
      console.log(
        'name:',
        name,
        'email:',
        email,
        'password:',
        password,
        'role:',
        role,
      );
      if (error) throw new Error();
      return { ok: true };
    } catch (e) {
      return { ok: false, error: 'error' };
    }
  }
}
