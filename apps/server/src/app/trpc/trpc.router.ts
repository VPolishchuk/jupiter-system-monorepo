import { INestApplication, Injectable } from '@nestjs/common';
import { z } from 'zod';
import { TrpcService } from './trpc.service';
import * as trpcExpress from '@trpc/server/adapters/express';

@Injectable()
export class TrpcRouter {
  constructor(private readonly trpc: TrpcService) {}

  appRouter = this.trpc.router({
    greeting: this.trpc.procedure.query(() => 'hello tRPC v10!'),
    hello: this.trpc.procedure
      .input(
        z.object({
          name: z.string().optional(),
        })
      )
      .query(({ input }) => {
        const { name } = input;
        return {
          greeting: `Hello ${name ? name : `Bilbo`}`,
          // greeting: `Hello  Bilbo`,
        };
      }),
    singup: this.trpc.procedure
      .input(
        z.object({
          email: z.string(),
          password: z.string().optional(),
        })
      )
      .query(({ input, ...res }) => {
        console.log('res     ', res)
        const { email, password } = input;
        return `Hello email: ${email}, password: ${password}`;
      }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      })
    );
  }
}

export type AppRouter = TrpcRouter[`appRouter`];
