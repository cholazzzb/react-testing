import { expect, it, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

import { useSearch } from './useSearch';

it('', async () => {
  const props = {
    onRefetch() {},
  };
  const { result } = renderHook(() => useSearch(props));
  expect(result.current.search).toBe('');

  const spy = vi.spyOn(props, 'onRefetch');
  await waitFor(() => {
    result.current.onSearch('searched');
  });
  expect(result.current.search).toBe('searched');
});
