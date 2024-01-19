import { NextResponse } from 'next/server';

import { db } from '~/mocks/db';
import { sleep } from '~/utils/async';

export async function GET(request: Request) {
  await sleep();
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
    skip: pageSizeNum * (pageNum - 1),
  });

  return NextResponse.json({ data: users }, { status: 200 });
}
