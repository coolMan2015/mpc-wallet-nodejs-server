import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['debug']
  });
  app.enableVersioning({
    type: VersioningType.URI
  })

  await app.listen(process.env.PORT || 3000);
  console.log(`Listen at: http://127.0.0.1:${process.env.PORT}`);
}
bootstrap();
