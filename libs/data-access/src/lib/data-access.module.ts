import { Module, Global } from '@nestjs/common';
import { DataAccessService } from './data-access.service';
// import { DataAccess } from './database.providers';

@Global()
@Module({
  controllers: [],
  // providers: [DataAccessService, DataAccess],
  providers: [DataAccessService],
  exports: [DataAccessService],
})
export class DataAccessModule {}
