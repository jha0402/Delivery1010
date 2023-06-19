import { Module } from '@nestjs/common';
import { AppRouterModule } from './app-router.module';





@Module({
  imports: [
    AppRouterModule],
})
export class AppModule {}
