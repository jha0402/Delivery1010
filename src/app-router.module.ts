import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { OrdersModule } from 'src/main/orders/orders.module';
import { UsersModule } from './main/users/users.module';
import { AlertsModule } from './main/alerts/alerts.module';
import { PaymentModule } from './main/payment/payment.module';
import { StoresModule } from './main/stores/stores.module';

const routes: Routes = [
  { path: 'orders', module: OrdersModule },
  { path: 'alerts', module: AlertsModule },
  { path: 'users', module: UsersModule },
  { path: 'payment', module: PaymentModule },
];

@Module({
  imports: [
    RouterModule.register(routes),
    OrdersModule,
    AlertsModule,
    UsersModule,
    PaymentModule,
    StoresModule,
  ],
  providers: [],
})
export class AppRouterModule {}
