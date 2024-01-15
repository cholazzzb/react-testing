import { render } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';

import { ListBody } from './ListBody';
import { server } from '~/mocks/node';

describe('', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('', () => {
    const screen = render(
      <ListBody data={[{ id: '123123', name: 'Boby' }]} selectedData={new Set([])} onToggleSelect={() => {}} />
    );
    const text = screen.getByText('Boby');
    expect(text).toBeTruthy();
  });
});
