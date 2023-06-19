import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('order')
@Controller('')
export class OrderController {

    @Get()
    getOrder(){
        return "test";
    }
    @Get("/orders")
    getOrders(){
        return "test";
    }
}
