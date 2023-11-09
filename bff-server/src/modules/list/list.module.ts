import { Module } from '@nestjs/common';
import {ListService} from './list.service';
import {ListResolve} from './list.resolve';
@Module({
  providers:[ListService,ListResolve]
})
export class ListModule {}
