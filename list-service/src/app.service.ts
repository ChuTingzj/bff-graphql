import { Injectable } from '@nestjs/common';
import { GetListRequest, GetListResponse } from './proto/list';

@Injectable()
export class AppService {
  async getList(request: GetListRequest): Promise<GetListResponse> {
    return {
      errNo: 0,
      errMsg: 'success',
      data: [
        {
          itemType: 2,
          itemInfo: {
            articleId: '7034323356459466760',
            userId: '3984285870341288',
            categoryId: '6809637767543259144',
            coverImage: '',
            title: '如何用 CSS 中写出超级美丽的阴影效果',
            briefContent:
              '「这是我参与11月更文挑战的第7天，活动详情查看：2021最后一次更文挑战」。 在我看来，最好的网站和Web应用程序对它们具有切实的"真实"质量。实现这种质量涉及很多因素，但阴影是一个关键因素。 然而',
            readTime: '13分钟',
            authorUserInfo: {
              userId: '3984285870341288',
              userName: '非优秀程序员',
              company: 'alibaba',
              avatarLarge:
                'https://p3-passport.byteacctimg.com/img/user-avatar/c7168b49aafa388a31948dc24a3ad0eb~300x300.image',
              description:
                '武汉光谷社区停运了，这是现在的备份站（www.999fin.com）。\r\n承接浏览器插件、APP、小程序等项目定制',
            },
          },
        },
      ],
    } satisfies GetListResponse;
  }
}
