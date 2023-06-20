import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { OrdersModule } from 'src/main/order/orders.module';
import { AppModule } from './app.module';
import { AlertsModule } from './main/alert/alerts.module';

const routes: Routes = [
  { path: 'orders', module: OrdersModule },
  { path: 'alerts', module: AlertsModule },
];

@Module({
  imports: [
    OrdersModule,
    AlertsModule,
    RouterModule.register(routes)
  ],
})
export class AppRouterModule {}
