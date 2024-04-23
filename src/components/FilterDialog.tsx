import React, { Dispatch, SetStateAction } from 'react';
import { IFilter } from '@app/types/index';

export default function FilterDialog({
    setfilterDialog,
    setFilters
  }: {
    setfilterDialog: Dispatch<SetStateAction<boolean>>;
    setFilters: Dispatch<SetStateAction<IFilter>>;
  }) {
  return (
    <div onClick={() => setfilterDialog(false)}>
      dialog
    </div>
  )
}
