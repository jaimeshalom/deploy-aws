import { type DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { type MongooseModuleOptions, MongooseModule } from '@nestjs/mongoose';

export const MardukMongooseServiceProvider: DynamicModule =
  MongooseModule.forRootAsync({
    inject: [ConfigService],
    useFactory(configService: ConfigService): MongooseModuleOptions {
      const uri = configService.get<string>('MONGODB_URI');
      if (!uri) {
        throw new Error(
          'No MongoDB URI found. Please check your .env (MONGODB_URI).',
        );
      }

      return {
        uri,
      };
    },
  });
