import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('order')
@Controller('')
export class OrdersController {

  
    @Get("")
    getOrders(){
        return "test";
    }
}
