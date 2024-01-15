import { ChangeEvent, useState } from 'react';

import { useQuery } from '~/utils/useQuery';
import { useSearch } from './components/ListHeader/useSearch';
import { getListName } from './service';

export function useUsers() {
  const { refetch: queryFetch, ...query } = useQuery({ queryFn: getListName, select: (res) => res.data });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const refetch = (params?: Partial<Parameters<typeof getListName>[0]>) => {
    queryFetch({ name: search, page, pageSize, ...params });
  };

  const { search, onSearch } = useSearch({ onRefetch: refetch });

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    onSearch(name);
    refetch({ name });
  };

  const onClickPrevPage = () => {
    setPage(page - 1);
    refetch({ page: page - 1 });
  };

  const onClickNextPage = () => {
    setPage(page + 1);
    refetch({ page: page + 1 });
  };

  const onChangePageSize = (sz: number) => {
    setPageSize(sz);
    refetch({ pageSize });
  };

  return {
    ...query,
    page,
    pageSize,
    refetch,
    search,
    onChangeSearch,
    onClickNextPage,
    onClickPrevPage,
    onChangePageSize,
  };
}
