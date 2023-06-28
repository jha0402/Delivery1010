import { IsNumber, IsString } from 'class-validator';
import { User } from 'src/main/users/entities/user.entity';
import { Column } from 'typeorm';

export class Store extends User {
  @Column({ unique: true })
  @IsNumber()
  userId: number;

  @Column({ unique: true })
  @IsString()
  storeName?: string;

  @Column()
  @IsString()
  content?: string;
  // status
}
