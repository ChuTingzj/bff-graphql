import {Injectable} from '@nestjs/common';
import {lastValueFrom} from 'rxjs';
import {RpcService} from '../rpc/rpc.service';
import {GetListResponse,GetListRequest} from '../../proto/list';

@Injectable()
export class ListService{
  constructor(private readonly rpcService:RpcService) {}
  async getList(request:GetListRequest):Promise<GetListResponse>{
    return await lastValueFrom(this.rpcService.listServiceClient.getList(request))
  }
}