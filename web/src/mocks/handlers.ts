import { http, HttpResponse } from 'msw';

import { db } from './db';
import { baseURL } from '~/const';

export const handlers = [
  http.get(`${baseURL}/users`, ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') ?? '1';
    const pageSize = url.searchParams.get('pageSize') ?? '10';

    const name = url.searchParams.get('name') ?? '';
    const pageNum = parseInt(page, 10);
    const pageSizeNum = parseInt(pageSize, 10);

    const users = db.user.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      take: pageSizeNum,
      skip: pageSizeNum * pageNum,
    });

    return HttpResponse.json({ data: users });
  }),
];
