import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ApiTags } from '@nestjs/swagger';
import { createPaymentInputDto } from './dtos/create-payment.dto';

@ApiTags('payment')
@Controller()
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post()
  createPayment(@Body() createPayment: createPaymentInputDto) {}
}
