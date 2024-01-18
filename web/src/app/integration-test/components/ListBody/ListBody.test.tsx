import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ListBody } from './ListBody';

describe('ListBody', () => {
  it('render correctly', () => {
    const screen = render(
      <ListBody
        data={[
          { id: '123123', name: 'Boby' },
          { id: '123124', name: 'Alice' },
        ]}
        selectedData={new Set([])}
        onToggleSelect={() => {}}
      />
    );
    expect(screen.getByText('Boby')).toBeTruthy();
  });
  it('render selected correctly', () => {
    const screen = render(
      <ListBody
        data={[
          { id: '123123', name: 'Jony' },
          { id: '123124', name: 'Trudy' },
        ]}
        selectedData={new Set(['Trudy'])}
        onToggleSelect={() => {}}
      />
    );
    expect(screen.getByText('Jony')).toBeTruthy();
    expect(screen.getByText('Trudy')).toBeTruthy();
    expect(screen.getByText('Selected')).toBeTruthy();
  });
});
