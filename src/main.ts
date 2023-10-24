import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './exceptions/all-exceptions.filter';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { SeedService } from './domains/auth/seed.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Seed database
  const seedService = app.get(SeedService);
  await seedService.seedDatabase();

  // Apply the global exception filter
  app.useGlobalFilters(new AllExceptionsFilter());

  // Apply the global interceptor
  app.useGlobalInterceptors(new TransformInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // This will automatically transform incoming payloads to DTO instances
      whitelist: true, // Strip away non-DTO properties
      forbidNonWhitelisted: true, // Throw an error for non-DTO properties
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API Description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  const port = 3003;
  await app.listen(port, () => {
    console.log(`Server live on ${port}!`);
  });
}
bootstrap();
