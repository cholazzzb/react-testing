import qs from 'qs';

import { baseURL } from '~/const';
import { Name } from './entity';

type GetListNameReq = {
  name?: string;
  page?: number;
  pageSize?: number;
};
type GetListNameRes = { data: Array<{ id: string; name: Name }> };

export async function getListName(params?: GetListNameReq): Promise<GetListNameRes> {
  const URL = `${baseURL}/users?${qs.stringify(params)}`;
  const users = await fetch(URL);
  const json = await users.json();
  return json;
}
