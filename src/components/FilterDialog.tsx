import React, { Dispatch, SetStateAction } from 'react';
import { IFilter } from '@app/types/index';

export default function FilterDialog({
    setfilterDialog,
    filters,
    setFilters
  }: {
    setfilterDialog: Dispatch<SetStateAction<boolean>>;
    filters: IFilter;
    setFilters: Dispatch<SetStateAction<IFilter>>;
  }) {
  return (
    <div onClick={() => setfilterDialog(false)}>
      dialog
    </div>
  )
}
