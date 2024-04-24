'use client';
import DownloadIcon from '@app/assets/svg/DownloadIcon';
import DropdownArrowIcon from '@app/assets/svg/DropdownArrowIcon';
import { IFilter } from '@app/types';
import React, { Dispatch, SetStateAction } from 'react';

export default function RevenueDashboard({
  setfilterDialog,
  filters
}: {
  setfilterDialog: Dispatch<SetStateAction<boolean>>;
  filters: IFilter;
}) {
  return (
    <div className="ml-20 mr-36 w-full">
      <div className="flex justify-between gap-6 border-b border-b-[#EFF1F6] pb-6">
        <div>
          <p className="text-2xl font-bold text-[#131316]">24 Transactions</p>
          <p className="text-sm font-medium text-[#56616B]">
            Your transactions for the last 7 days
          </p>
        </div>
        <div className="flex gap-3 font-semibold text-[#131316]">
          <button onClick={()=>setfilterDialog(true)} className="flex items-center gap-1 rounded-[100px] bg-[#EFF1F6] py-3 pl-[30px] pr-5">
            Filter
            <DropdownArrowIcon />
          </button>
          <button className="flex items-center gap-1 rounded-[100px] bg-[#EFF1F6] py-3 pl-[30px] pr-5">
            Export list
            <DownloadIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
