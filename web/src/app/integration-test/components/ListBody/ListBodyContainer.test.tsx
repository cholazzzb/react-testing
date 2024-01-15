import { render } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';

import { server } from '~/mocks/node';
import { getListName } from '../../service';
import { ListBodyContainer } from './ListBodyContainer';

describe('ListBodyContainer', () => {
  // mock BE service with msw
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('render all name from backend', async () => {
    const svc = await getListName({});
    const screen = render(<ListBodyContainer data={svc.data} />);
    for (const datum of svc.data) {
      const text = screen.getByText(datum.name);
      expect(text).toBeTruthy();
    }
  });
});
