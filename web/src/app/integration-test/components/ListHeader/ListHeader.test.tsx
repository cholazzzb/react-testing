import { afterAll, afterEach, beforeAll, describe, it } from 'vitest';

import { baseURL } from '~/const';
import { server } from '../../../../mocks/node';
import { getListName } from '../../service';

describe('', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('', async () => {
    getListName({ name: 'a', page: 10, pageSize: 23 });
    const user = await fetch(`${baseURL}/users`);
    const userJSON = await user.json();
    console.log({ userJSON });
  });
});
