import { Resolver, Args, Query, Int } from '@nestjs/graphql';
import { ListResponseModel } from './list.model';
import { ListService } from './list.service';

@Resolver(() => ListResponseModel)
export class ListResolve {
  constructor(private readonly listService: ListService) {}

  @Query(() => ListResponseModel)
  async getList(
    @Args('idType', { type: () => Int }) idType: number,
    @Args('cursor') cursor: string,
    @Args('limit',{type:()=>Int}) limit:number,
    @Args('clientType',{type:()=>Int}) clientType:number,
    @Args('sortType',{type:()=>Int}) sortType:number
  ) {
    return this.listService.getList({ idType, cursor,limit,clientType,sortType });
  }
}