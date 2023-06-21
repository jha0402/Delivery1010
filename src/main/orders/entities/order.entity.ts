import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  OrderNo?: number;

  @Column()
  Address: string;

  @Column()
  AddressDetail: string;

  @Column()
  PhoneNumber: string;

  @Column()
  PaymentMethod: number;  // 0 : 카드 , 1: 현금

  @Column()
  PaymentStatus: number;  // 0 : 결재 미완료 , 1: 결재 완료, 2: 결재 취소

  @Column({ default: 'pending' })
  OrderStatus: number; // 0 : 주문준비중, 1 : 주문확정 2 : 주문취소

  @CreateDateColumn()
  SysRegDT: Date;

  @UpdateDateColumn()
  SysModDT?: Date;
}
