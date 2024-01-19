import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ListHeader } from './ListHeader';

describe('ListHeader', () => {
  it('render initial state correctly', async () => {
    const screen = render(
      <ListHeader
        search=''
        onSearch={() => {}}
        page={1}
        onClickPrevPage={() => {}}
        onClickNextPage={() => {}}
        pageSize={10}
        onClickIncreasePageSize={() => {}}
        onClickDecreasePageSize={() => {}}
      />
    );

    expect(screen.getByText('page:')).toBeTruthy();
    expect(screen.getByText('1')).toBeTruthy();

    expect(screen.getByText('page size:')).toBeTruthy();
    expect(screen.getByText('10')).toBeTruthy();
  });
});
