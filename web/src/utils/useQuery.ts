import { useCallback, useEffect, useState } from 'react';

enum Status {
  'loading' = 'loading',
  'success' = 'success',
  'error' = 'error',
  'idle' = 'idle',
}
type UseQueryParams<R, S, P> = {
  queryFn: (params?: P) => Promise<R>;
  select: (res: R) => S;
};
export function useQuery<R, S, P>(params: UseQueryParams<R, S, P>) {
  const [status, setStatus] = useState<Status>(Status.idle);
  const [data, setData] = useState<S>();

  const refetch = useCallback(
    (fetchParams?: P) => {
      setStatus(Status.loading);
      params
        .queryFn(fetchParams)
        .then((res) => {
          const data = params?.select(res);
          setData(data);
          setStatus(Status.success);
        })
        .catch((_err) => setStatus(Status.error));
    },
    [params]
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, status, refetch };
}
