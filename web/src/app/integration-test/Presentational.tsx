import { getListName } from '../../domain/service';
import { ListBodyContainer } from './components/ListBody/ListBodyContainer';
import { ListHeaderContainer } from './components/ListHeader/ListHeaderContainer';

type Props = {
  data: Awaited<ReturnType<typeof getListName>>['data'];
  onRefetch: (params: Parameters<typeof getListName>[0]) => void;
};
export function Presentational(props: Props) {
  return (
    <div className='flex-column p-4'>
      <ListHeaderContainer onRefetch={props.onRefetch} />
      <ListBodyContainer data={props.data} />
    </div>
  );
}
