import {Field,Int,ObjectType} from '@nestjs/graphql';
import {
  GetListRequest,
  GetListResponse,
  GetListResponse_Data,
  GetListResponse_Data_ArticleInfo, GetListResponse_Data_ArticleInfo_AuthorInfo
} from "../../proto/list";

@ObjectType()
export class ListRequestModel implements GetListRequest{
  @Field(()=>Int)
  idType:number
  @Field(()=>Int)
  clientType: number;
  @Field(()=>Int)
  sortType: number;
  @Field()
  cursor: string;
  @Field(()=>Int)
  limit: number;
}

@ObjectType()
class GetListResponse_Data_ArticleInfo_AuthorInfo_Model implements GetListResponse_Data_ArticleInfo_AuthorInfo{
  @Field()
  avatarLarge: string;
  @Field()
  company: string;
  @Field()
  description: string;
  @Field()
  userId: string;
  @Field()
  userName: string;
}

@ObjectType()
class GetListResponse_Data_ArticleInfo_Model implements GetListResponse_Data_ArticleInfo{
  @Field()
  articleId: string;
  @Field(()=>GetListResponse_Data_ArticleInfo_AuthorInfo_Model,{nullable:true})
  authorUserInfo: GetListResponse_Data_ArticleInfo_AuthorInfo_Model | undefined;
  @Field()
  briefContent: string;
  @Field()
  categoryId: string;
  @Field()
  coverImage: string;
  @Field()
  readTime: string;
  @Field()
  title: string;
  @Field()
  userId: string;

}

@ObjectType()
class GetListResponse_Data_Model implements GetListResponse_Data{
  @Field(()=>GetListResponse_Data_ArticleInfo_Model,{nullable:true})
  itemInfo: GetListResponse_Data_ArticleInfo_Model | undefined;
  @Field(()=>Int)
  itemType: number;
}

@ObjectType()
export class ListResponseModel implements GetListResponse{
  @Field(()=>[GetListResponse_Data_Model])
  data: GetListResponse_Data_Model[];
  @Field()
  errMsg: string;
  @Field(()=>Int)
  errNo: number;
}