import { expect, it, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

import { useSearch } from './useSearch';

it('when user searching the input changes', async () => {
  const props = {
    onRefetch() {},
  };
  const { result } = renderHook(() => useSearch(props));
  expect(result.current.search).toBe('');

  // this comment demonstrate what won't work using spy
  // debouncedFn return different reference and spy is not working here
  // const spy = vi.spyOn(props, 'onRefetch');
  // await waitFor(() => {
  //   result.current.onSearch('searched');
  // expect(spy).toHaveBeenCalled();
  // });
  expect(result.current.search).toBe('searched');
});
