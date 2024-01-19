import { ListBodyContainer } from './components/ListBody/ListBodyContainer';
import { ListHeaderContainer } from './components/ListHeader/ListHeaderContainer';
import { getListName } from './service';
import { useUsers } from './useUsers';

type Props = {
  data: Awaited<ReturnType<typeof getListName>>['data'];
  onRefetch: ReturnType<typeof useUsers>['refetch'];
};
export function Presentational(props: Props) {
  return (
    <div className='flex-column p-4'>
      <ListHeaderContainer onRefetch={props.onRefetch} />
      <ListBodyContainer data={props.data} />
    </div>
  );
}
