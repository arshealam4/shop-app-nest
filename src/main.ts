import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from '@/app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ logger: false }));
  app.enableCors();
  const config = app.get(ConfigService);
  const options = new DocumentBuilder()
    .setTitle('Shop-NEST-API Console')
    .setVersion('1.0')
    .addBearerAuth()
    .addServer(config.get('SERVER'))
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(config.get('PORT'));
}
bootstrap();
