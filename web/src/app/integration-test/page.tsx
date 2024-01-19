'use client';

import { useQuery } from '../../utils/useQuery';
import { Presentational } from './Presentational';
import { getListName } from '../../domain/service';

// Container
export default function IntegrationTest() {
  const query = useQuery({ queryFn: getListName, select: (res) => res.data });

  return <Presentational data={query.data ?? []} onRefetch={query.refetch} />;
}
