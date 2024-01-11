import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpErrorFilter } from './Exceptions/HttpErrorFilter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpErrorFilter());

  const config = new DocumentBuilder()
    .setTitle('GMI WEATHER APP')
    .setDescription('The weather API description')
    .setVersion('1.0')
    .addTag('weather')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
