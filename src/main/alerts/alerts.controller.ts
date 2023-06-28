import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('alert')
@Controller('')
export class AlertsController {
    @Get()
    getAlert(){
        return "test";
    }
}
