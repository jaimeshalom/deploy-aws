import {
  type MiddlewareConsumer,
  type NestModule,
  Module,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { RequestMetaMiddleware } from './modules/shared/domain/middlewares/RequestMetaMiddleware';
import { MardukMongooseModule } from './modules/shared/infrastructure/MardukMongooseModule';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MardukMongooseModule],
})
export class AppModule implements NestModule {
  static port: number;
  static prefix: string;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = Number.parseInt(
      this.configService.get('PORT') ?? '3000',
      10,
    );
    AppModule.prefix = this.configService.get('PREFIX') ?? '/v1';
  }

  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestMetaMiddleware).forRoutes('*path');
  }
}
