import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import {resolve} from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options:{
        package:'LIST',
        url:'localhost:9001',
        protoPath:resolve(__dirname,'../../shared/proto/list.proto')
      }
    },
  );
  await app.listen();
}
bootstrap();
