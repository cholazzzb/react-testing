import { useUsers } from '../../useUsers';
import { ListHeader } from './ListHeader';
import { usePagination } from './usePagination';
import { useSearch } from './useSearch';

type ListHeaderProps = {
  onRefetch: ReturnType<typeof useUsers>['refetch'];
};
export function ListHeaderContainer(props: ListHeaderProps) {
  const { search, onSearch } = useSearch({ onRefetch: props.onRefetch });
  const { page, onClickPrevPage, onClickNextPage, pageSize, onClickDecreasePageSize, onClickIncreasePageSize } =
    usePagination({ onRefetch: props.onRefetch });

  return (
    <ListHeader
      search={search}
      onSearch={onSearch}
      page={page}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      pageSize={pageSize}
      onClickDecreasePageSize={onClickDecreasePageSize}
      onClickIncreasePageSize={onClickIncreasePageSize}
    />
  );
}
