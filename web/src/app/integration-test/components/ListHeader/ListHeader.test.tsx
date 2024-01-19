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

    expect(screen.getByText('page:')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();

    expect(screen.getByText('page size:')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });
});
