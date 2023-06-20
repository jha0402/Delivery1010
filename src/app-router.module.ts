import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { OrderModule } from 'src/main/order/order.module';
import { AppModule } from './app.module';
import { AlertModule } from './main/alert/alert.module';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  { path: 'order', module: OrderModule },
  { path: 'alert', module: AlertModule },
];

@Module({
  imports: [
    OrderModule,
    AlertModule,
    RouterModule.register(routes),
    UsersModule
  ],
})
export class AppRouterModule {}
