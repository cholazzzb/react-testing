import { useState } from 'react';

import { useUsers } from '../../useUsers';
import { useDebounceFn } from '~/utils/hook';

type Params = { onRefetch: ReturnType<typeof useUsers>['refetch'] };
export function useSearch(params: Params) {
  const [search, setSearch] = useState('');

  const [refetchDb] = useDebounceFn(params.onRefetch);

  const onSearch = (value: string) => {
    setSearch(value);
    refetchDb({ name: value });
  };

  return { search, onSearch };
}
