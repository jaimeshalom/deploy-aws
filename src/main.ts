import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

import { GlobalExceptionFilter } from './modules/shared/application/errors/GlobalExceptionFilter';
import { ARI_API_TOKEN_KEY_NAME } from './modules/shared/application/guards/AriApiTokenGuard';
import { AppModule } from './AppModule';
import { darkModeCss } from './darkModeCss';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(AppModule.prefix);

  const config = new DocumentBuilder()
    .setTitle('Marduk ARI Integration Documentation')
    .setDescription('Marduk ARI Integration Documentation')
    .setVersion('1.0')
    .addTag('Marduk')
    .addApiKey(
      {
        type: 'apiKey',
        name: ARI_API_TOKEN_KEY_NAME,
        in: 'header',
        description:
          'Token de autenticación personalizado para acceder a la API',
      },
      ARI_API_TOKEN_KEY_NAME,
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(`${AppModule.prefix}/doc`, app, document, {
    customSiteTitle: 'MardukApp API Documentation',
    customCss: darkModeCss,
  });

  app.use(
    '/reference',
    apiReference({
      spec: {
        content: document,
      },
      theme: 'bluePlanet',
      /* theme?: 'alternate' | 'default' | 'moon' | 'purple' | 'solarized' |
        'bluePlanet' | 'saturn' | 'kepler' | 'mars' | 'deepSpace' | 'none' */
    }),
  );

  app.useGlobalFilters(new GlobalExceptionFilter());

  await app.listen(process.env.PORT ?? 3000);
}

// eslint-disable-next-line unicorn/prefer-top-level-await
void bootstrap();
