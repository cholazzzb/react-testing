import { useState } from 'react';

import { getListName } from '~/domain/service';
import { useDebounceFn } from '~/utils/hook';

type Params = { onRefetch: (params: Parameters<typeof getListName>[0]) => void };
export function useSearch(params: Params) {
  const [search, setSearch] = useState('');

  const [refetchDb] = useDebounceFn(params.onRefetch);

  const onSearch = (value: string) => {
    setSearch(value);
    refetchDb({ name: value });
  };

  return { search, onSearch };
}
