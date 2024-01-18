import { useUsers } from '../../useUsers';
import { ListHeader } from './ListHeader';
import { usePagination } from './usePagination';
import { useSearch } from './useSearch';

type ListHeaderProps = {
  onRefetch: ReturnType<typeof useUsers>['refetch'];
};
export function ListHeaderContainer(props: ListHeaderProps) {
  const searchHook = useSearch({ onRefetch: props.onRefetch });
  const paginationHook = usePagination({ onRefetch: props.onRefetch });

  return <ListHeader {...searchHook} {...paginationHook} />;
}
