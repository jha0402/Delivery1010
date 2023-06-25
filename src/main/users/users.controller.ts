import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateAccountInput } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  createAccount(@Body() createAccountInput: CreateAccountInput) {
    return this.usersService.createAccount(createAccountInput);
  }
}
