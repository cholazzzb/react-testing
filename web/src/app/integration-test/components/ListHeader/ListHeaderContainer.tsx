import { getListName } from '~/domain/service';
import { ListHeader } from './ListHeader';
import { usePagination } from './usePagination';
import { useSearch } from './useSearch';

type ListHeaderProps = { onRefetch: (params: Parameters<typeof getListName>[0]) => void };
export function ListHeaderContainer(props: ListHeaderProps) {
  const searchHook = useSearch({ onRefetch: props.onRefetch });
  const paginationHook = usePagination({ onRefetch: props.onRefetch });

  return <ListHeader {...searchHook} {...paginationHook} />;
}
