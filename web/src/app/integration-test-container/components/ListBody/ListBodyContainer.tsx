import React from 'react';

import { ListBody } from './ListBody';
import { useSelectedValue } from './useSelectedValue';
import { getListName } from '../../service';

type Props = {
  data: Awaited<ReturnType<typeof getListName>>['data'];
};
export function ListBodyContainer(props: Props) {
  const { selected, onToggleSelect } = useSelectedValue();
  return <ListBody data={props.data} selectedData={selected} onToggleSelect={onToggleSelect} />;
}
