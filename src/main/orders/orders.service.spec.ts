import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { getRepository } from 'typeorm';
import { Order } from './entities/order.entity';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersService]

    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('주문 생성하기' , () =>{
    const newOrder : Order = {
      Address: '전주시 완산구 배학길 4-4',
      AddressDetail: '202호',
      PhoneNumber: '010-6409-8481',
      PaymentMethod: 0,
      PaymentStatus: 0,
      OrderStatus: 0, 
      SysRegDT : new Date() 
    };

    test('중복 회원가입 불가', () => {
      const createdOrder = service.createOrder(newOrder);
      expect(createdOrder).toEqual(0);
    });

  })
});
