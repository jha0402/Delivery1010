import { IsEmail, IsEnum, IsNumber, IsString } from 'class-validator';
import { CoreEntity } from 'src/main/common/entities/core.entity';

export enum UserRole {
  Client = 'Client', // 0
  StoreManager = 'StoreManager', // 1
}
export class User extends CoreEntity {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsEnum(UserRole)
  role: UserRole;
  @IsString()
  address?: string;
  @IsNumber()
  cartId?: number;
  // favorites?: Store[];
  // reviews?: Review[];
  @IsNumber()
  storeId?: number;
}
