import { IsEmail, IsEnum, IsNumber, IsString } from 'class-validator';
import { CoreEntity } from 'src/main/common/entities/core.entity';
import { Column } from 'typeorm';

export enum UserRole {
  Client = 'Client', // 0
  StoreManager = 'StoreManager', // 1
}
export class User extends CoreEntity {
  @Column()
  @IsString()
  name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ select: false })
  @IsString()
  password: string;

  @Column({ type: 'enum', enum: UserRole })
  @IsEnum(UserRole)
  role: UserRole;

  @Column()
  @IsString()
  address?: string;

  // @Column({ unique: true })
  // @IsNumber()
  // cartId?: number;
  // favorites?: Store[];
  // reviews?: Review[];
  @Column({ unique: true })
  @IsNumber()
  storeId?: number;
}
