import {Injectable,Inject} from '@nestjs/common';
import {ListServiceClient,LIST_SERVICE_NAME} from '../../proto/list';
import {ClientGrpc} from '@nestjs/microservices';

@Injectable()
export class RpcService{
  readonly listServiceClient:ListServiceClient;
  constructor(@Inject('LIST_CLIENT') private readonly listRpcClient:ClientGrpc) {
    this.listServiceClient =this.listRpcClient.getService<ListServiceClient>(LIST_SERVICE_NAME);
  }
}