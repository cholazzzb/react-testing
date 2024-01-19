import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useQuery } from './useQuery';

describe('', () => {
  it('test refetch', async () => {
    const { result } = renderHook(() =>
      useQuery({
        queryFn: () => {
          return new Promise((res) => res('data'));
        },
        select: (res) => res,
      })
    );

    await waitFor(
      () => {
        expect(result.current.data).toEqual('data');
      },
      { timeout: 5000 }
    );
  });
});
