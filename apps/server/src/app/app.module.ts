import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TrpcModule } from './trpc/trpc.module';
import { TypeormModule } from './typeorm/typeorm.module';

@Module({
  imports: [TrpcModule, TypeormModule],
  controllers: [AppController],
  providers: [AppService, TrpcModule],
})
export class AppModule {}
