import { ChangeEvent } from 'react';

import { useSearch } from './useSearch';
import { usePagination } from './usePagination';

type ListHeaderProps = ReturnType<typeof useSearch> & ReturnType<typeof usePagination>;
export function ListHeader(props: ListHeaderProps) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onSearch(e.target.value);
  };

  return (
    <div className='mt-2 mb-2 flex flex-col items-center '>
      <input
        value={props.search}
        onChange={onChange}
        placeholder='Search'
        className='text-black p-2 px-4 rounded-md w-full'
      />
      <div className='w-full flex justify-between'>
        <div className='flex p-2 items-center'>
          <p>page</p>
          <button
            className='flex items-center justify-center rounded-md w-8 h-8 py-2 border-2 mx-2'
            onClick={props.onClickPrevPage}
          >
            -
          </button>
          {props.page}
          <button
            className='flex items-center justify-center rounded-md w-8 h-8 py-2 border-2 mx-2'
            onClick={props.onClickNextPage}
          >
            +
          </button>
        </div>
        <div className='flex p-2 items-center'>
          <p>page size:</p>
          <button
            className='flex items-center justify-center rounded-md w-8 h-8 py-2 border-2 mx-2'
            onClick={props.onClickDecreasePageSize}
          >
            -
          </button>
          {props.pageSize}
          <button
            className='flex items-center justify-center rounded-md w-8 h-8 py-2 border-2 mx-2'
            onClick={props.onClickIncreasePageSize}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
