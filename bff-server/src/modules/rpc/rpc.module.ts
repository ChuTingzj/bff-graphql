import { Module,Global } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {RpcService} from './rpc.service';
import { resolve } from "path";

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'LIST_CLIENT',
        transport: Transport.GRPC,
        options:{
          url:'localhost:9001',
          package:'LIST',
          protoPath:resolve(__dirname,'../../../../shared/proto/list.proto')
        }
      },
    ]),
  ],
  providers:[RpcService],
  exports:[RpcService]
})
export class RpcModule {}
