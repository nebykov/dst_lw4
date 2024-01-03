import { INestApplication } from "@nestjs/common"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(8000, () => console.log("Work on 8000"));
}
bootstrap();
