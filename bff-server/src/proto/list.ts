/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "LIST";

export interface GetListRequest {
  idType: number;
  clientType: number;
  sortType: number;
  cursor: string;
  limit: number;
}

export interface GetListResponse {
  errNo: number;
  errMsg: string;
  data: GetListResponse_Data[];
}

export interface GetListResponse_Data {
  itemType: number;
  itemInfo: GetListResponse_Data_ArticleInfo | undefined;
}

export interface GetListResponse_Data_ArticleInfo {
  articleId: string;
  userId: string;
  categoryId: string;
  coverImage: string;
  title: string;
  briefContent: string;
  readTime: string;
  authorUserInfo: GetListResponse_Data_ArticleInfo_AuthorInfo | undefined;
}

export interface GetListResponse_Data_ArticleInfo_AuthorInfo {
  userName: string;
  userId: string;
  company: string;
  avatarLarge: string;
  description: string;
}

export const L_IS_T_PACKAGE_NAME = "LIST";

export interface ListServiceClient {
  getList(request: GetListRequest): Observable<GetListResponse>;
}

export interface ListServiceController {
  getList(request: GetListRequest): Promise<GetListResponse> | Observable<GetListResponse> | GetListResponse;
}

export function ListServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getList"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ListService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ListService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const LIST_SERVICE_NAME = "ListService";
