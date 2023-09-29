import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TrpcModule } from './trpc/trpc.module';
// import { TypeormModule } from './typeorm/typeorm.module';

@Module({
  // imports: [TrpcModule, TypeormModule],
  imports: [
    TrpcModule,
    TypeOrmModule.forRoot({
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'PASSWORD',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService, TrpcModule],
})
export class AppModule {}
