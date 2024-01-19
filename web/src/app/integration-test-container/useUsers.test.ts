import { renderHook, waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';

import { server } from '~/mocks/node';
import { useUsers } from './useUsers';

describe('', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('test handler', async () => {
    const { result } = renderHook(() => useUsers());
    await waitFor(() => {
      // destructure will remove the reactivity and broke test
      // const { pageSize } = result.current;
      // reassign variable also will remove the reactivity and broke the test
      // const hook = result.current;
      result.current.onChangePageSize(12);
      expect(result.current.pageSize).toBe(12);
      expect(result.current.data?.length).toBe(12);
    });
  });
});
