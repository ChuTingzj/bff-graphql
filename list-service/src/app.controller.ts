import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GetListRequest, GetListResponse, ListServiceController,ListServiceControllerMethods } from "./proto/list";
import { Observable } from "rxjs";

@Controller('list')
@ListServiceControllerMethods()
export class AppController implements ListServiceController{
  constructor(private readonly appService: AppService) {}

  getList(request: GetListRequest): Promise<GetListResponse> | Observable<GetListResponse> | GetListResponse {
    return this.appService.getList(request);
  }
}
