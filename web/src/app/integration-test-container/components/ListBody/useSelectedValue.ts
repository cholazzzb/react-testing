import { useState } from 'react';

import { Name } from '../../entity';

export function useSelectedValue() {
  const [selected, setSelected] = useState<Set<Name>>(new Set([]));

  const onToggleSelect = (value: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      return next;
    });
  };
  return { selected, onToggleSelect };
}
