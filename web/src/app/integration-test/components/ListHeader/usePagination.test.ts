import { describe, expect, it, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

import { usePagination } from './usePagination';

describe('usePagination', () => {
  const props: Parameters<typeof usePagination>[0] = {
    onRefetch: (_params) => {
      return;
    },
  };
  const { result } = renderHook(() => usePagination(props));
  it('Initial state', async () => {
    //
    expect(result.current.page).toBe(1);
    expect(result.current.pageSize).toBe(10);
  });
  const spy = vi.spyOn(props, 'onRefetch');
  it('page', async () => {
    await waitFor(() => {
      result.current.onClickNextPage();
      expect(spy).toHaveBeenCalled();
      expect(result.current.page).toBe(2);
    });

    await waitFor(() => {
      result.current.onClickPrevPage();
      expect(spy).toHaveBeenCalled();
      expect(result.current.page).toBe(1);
    });
  });
  it('pageSize', async () => {
    await waitFor(() => {
      result.current.onClickIncreasePageSize();
      expect(spy).toHaveBeenCalled();
      expect(result.current.pageSize).toBe(20);
    });

    await waitFor(() => {
      result.current.onClickDecreasePageSize();
      expect(spy).toHaveBeenCalled();
      expect(result.current.pageSize).toBe(10);
    });
  });
});
