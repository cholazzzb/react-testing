import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { debug } from 'vitest-preview';

import { server } from '~/mocks/node';
import { sleep } from '~/utils/async';
import IntegrationTest from './page';

describe('', () => {
  // mock BE service with msw
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it('', async () => {
    const screen = render(<IntegrationTest />);
    expect(screen.queryByText('page:')).toBeInTheDocument();
    const searchbox = screen.getByRole('textbox');

    // to wait useEffect that has async with BE
    await sleep(0);

    // wrap with await act
    await act(async () => {
      fireEvent.change(searchbox, { target: { value: 'a' } });
      await sleep(2000);
    });

    debug();
    //     await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i));
    //     const results = screen.getAllByRole('listitem').map((listItem) => {
    //       return within(listItem).getByRole('heading', { level: 2 }).textContent;
    //     });
    //     // https://kcd.im/snapshots
    //     expect(results).toMatchInlineSnapshot(`
    //     Array [
    //       "The Way of Kings (Book 1 of the Stormlight Archive)",
    //       "Words of Radiance (Book 2 of the Stormlight Archive)",
    //       "Oathbringer (Book 3 of the Stormlight Archive)",
    //     ]
    //   `);
  });
});
