// /**
//  * This is not a production server yet!
//  * This is only a minimal backend to get started.
//  */

// import { Logger } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';

// import { AppModule } from './app/app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);

//   Logger.log(
//     `🚀 Application is running on: ${process.env.PORT}`
//   );
//   const port = process.env.PORT || 3002;
//   await app.listen(port);
//   Logger.log(
//     `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
//   );
// }

// bootstrap();
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { TrpcRouter } from './app/trpc/trpc.router';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const globalPrefix = 'api';
  // app.setGlobalPrefix(globalPrefix);
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);
  const port = process.env.PORT || 3002;
  await app.listen(port);
  Logger.log(
    // `🚀 Application is running on: http://localhost:${port}/${globalPrefix}/trpc`
    `🚀 Application is running on: http://localhost:${port}/trpc`
  );
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();

