import { Module } from '@nestjs/common';

import { MardukMongooseServiceProvider } from './mongo/MardukMongooseServiceProvider';

@Module({
  imports: [MardukMongooseServiceProvider],
  exports: [MardukMongooseServiceProvider],
})
export class MardukMongooseModule {}
