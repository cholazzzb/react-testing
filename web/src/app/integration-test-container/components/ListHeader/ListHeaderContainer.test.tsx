import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ComponentProps } from 'react';
import { debug } from 'vitest-preview';

import { ListHeaderContainer } from './ListHeaderContainer';

describe('ListHeaderContainer', () => {
  const props: ComponentProps<typeof ListHeaderContainer> = {
    onRefetch(_params) {},
  };
  const spy = vi.spyOn(props, 'onRefetch');
  const screen = render(<ListHeaderContainer {...props} />);
  debug();

  const [decPage, decPageSize] = screen.getAllByText('-');
  const [incPage, incPageSize] = screen.getAllByText('+');

  // use geyByText will return error, must use queryByText
  it('negative case, page and pageSize should not less than 1', () => {
    fireEvent.click(decPage);
    expect(screen.queryByText('0')).not.toBeInTheDocument();
    fireEvent.click(decPageSize);
    expect(screen.queryByText('-10')).not.toBeInTheDocument();
  });

  it('positive case, page and pageSize should changes when user click the button', () => {
    fireEvent.click(incPage);
    expect(screen.getByText('2')).toBeTruthy();

    fireEvent.click(incPageSize);
    expect(screen.getByText('20')).toBeTruthy();

    fireEvent.click(decPage);
    expect(screen.getByText('1')).toBeTruthy();

    fireEvent.click(decPageSize);
    expect(screen.getByText('10')).toBeTruthy();
  });
});
