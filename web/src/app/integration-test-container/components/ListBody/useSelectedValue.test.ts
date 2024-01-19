import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useSelectedValue } from './useSelectedValue';

describe('useSelectedValue hook works correctly', () => {
  const { result } = renderHook(() => useSelectedValue());

  it('initial state should return correctly', () => {
    expect(result.current.selected.size).toBe(0);
    expect(typeof result.current.onToggleSelect).toBe('function');
  });

  it('handler should return correctly', () => {
    act(() => {
      result.current.onToggleSelect('value1');
    });
    expect(result.current.selected.size).toBe(1);
    expect(result.current.selected.has('value1')).toBeTruthy();

    act(() => {
      result.current.onToggleSelect('value1');
    });
    expect(result.current.selected.size).toBe(0);
  });
});
