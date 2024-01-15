import { expect, it, describe } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useCoba } from './useCoba';

describe('useCoba', () => {
  it('should return a default search term and original items', () => {
    const items = [{ title: 'Star Wars' }];

    const { result } = renderHook(() => useCoba(items));

    expect(result.current.searchTerm).toBe('');
    expect(result.current.filteredItems).toEqual(items);
  });

  it('should return a filtered list of items', () => {
    const items = [{ title: 'Star Wars' }, { title: 'Starship Troopers' }];

    const { result } = renderHook(() => useCoba(items));

    act(() => {
      result.current.setSearchTerm('Wars');
    });

    expect(result.current.searchTerm).toBe('Wars');
    expect(result.current.filteredItems).toEqual([{ title: 'Star Wars' }]);
  });
});
