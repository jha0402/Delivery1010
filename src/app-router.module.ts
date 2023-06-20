import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { OrderModule } from 'src/main/order/order.module';
import { AppModule } from './app.module';
import { AlertModule } from './main/alert/alert.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: 'order', module: OrderModule },
  { path: 'alert', module: AlertModule },
];

@Module({
  imports: [
    OrderModule,
    AlertModule,
    RouterModule.register(routes),
    AuthModule,
  ],
})
export class AppRouterModule {}
