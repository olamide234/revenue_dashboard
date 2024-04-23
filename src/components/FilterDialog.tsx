import React, { Dispatch, SetStateAction } from 'react';

export default function FilterDialog({
    setfilterDialog,
  }: {
    setfilterDialog: Dispatch<SetStateAction<boolean>>;
  }) {
  return (
    <div onClick={() => setfilterDialog(false)}>
      dialog
    </div>
  )
}
