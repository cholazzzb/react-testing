import { useState } from 'react';

import { getListName } from '~/domain/service';

type Params = { onRefetch: (params: Parameters<typeof getListName>[0]) => void };

export function usePagination(params: Params) {
  const [page, setPage] = useState(1);
  const onClickPrevPage = () => {
    if (page === 1) {
      return;
    }
    const prevPage = page - 1;
    setPage(prevPage);
    params.onRefetch({ page: prevPage });
  };
  const onClickNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    params.onRefetch({ page: nextPage });
  };

  const [pageSize, setPageSize] = useState(10);
  const onClickIncreasePageSize = () => {
    const increasedPageSize = pageSize + 10;
    setPageSize(increasedPageSize);
    params.onRefetch({ pageSize: increasedPageSize });
  };

  const onClickDecreasePageSize = () => {
    if (pageSize < 11) {
      return;
    }
    const decreasedPageSize = pageSize - 10;
    setPageSize(decreasedPageSize);
    params.onRefetch({ pageSize: decreasedPageSize });
  };

  return { page, onClickPrevPage, onClickNextPage, pageSize, onClickIncreasePageSize, onClickDecreasePageSize };
}
