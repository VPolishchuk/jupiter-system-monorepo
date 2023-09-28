import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppRouter } from '@server/app/trpc/trpc.router';
// import { AppRouter } from '../../server/src/app/trpc/trpc.router';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3002/trpc',
    }),
  ],
});
