'use client';
import CautionIcon from '@app/assets/svg/CautionIcon';
import DownloadIcon from '@app/assets/svg/DownloadIcon';
import DropdownArrowIcon from '@app/assets/svg/DropdownArrowIcon';
import { IFilter } from '@app/types';
import React, { Dispatch, SetStateAction } from 'react';

export default function RevenueDashboard({
  setfilterDialog,
  filters,
}: {
  setfilterDialog: Dispatch<SetStateAction<boolean>>;
  filters: IFilter;
}) {
  return (
    <div className="ml-20 mr-36 w-full">
      <div className="my-16 flex gap-72">
        <div>
          <div className="flex items-center gap-16">
            <div>
              <div className="mb-2 text-sm font-medium text-[#56616B]">
                Available Balance
              </div>
              <div className="text-4xl font-bold text-[#131316]">
                USD 120,500.00
              </div>
            </div>
            <button className="rounded-[100px] bg-[#131316] px-7 py-3.5 font-semibold text-white">
              Withdraw
            </button>
          </div>
          <></>
        </div>
        <div className="flex w-[16.94rem] min-w-fit flex-col gap-8">
          <div>
            <div className="mb-2 flex items-center justify-between gap-2 text-sm font-medium text-[#56616B]">
              Ledger Balance
              <CautionIcon />
            </div>
            <div className="text-[1.75rem] font-bold text-[#131316]">
              USD 0.00
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between gap-2 text-sm font-medium text-[#56616B]">
              Total Payout
              <CautionIcon />
            </div>
            <div className="text-[1.75rem] font-bold text-[#131316]">
              USD 55,080.00
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between gap-2 text-sm font-medium text-[#56616B]">
              Total Revenue
              <CautionIcon />
            </div>
            <div className="text-[1.75rem] font-bold text-[#131316]">
              USD 175,580.00
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between gap-2 text-sm font-medium text-[#56616B]">
              Pending Payout
              <CautionIcon />
            </div>
            <div className="text-[1.75rem] font-bold text-[#131316]">
              USD 0.00
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-6 border-b border-b-[#EFF1F6] pb-6">
        <div>
          <p className="text-2xl font-bold text-[#131316]">24 Transactions</p>
          <p className="text-sm font-medium text-[#56616B]">
            Your transactions for the last 7 days
          </p>
        </div>
        <div className="flex gap-3 font-semibold text-[#131316]">
          <button
            onClick={() => setfilterDialog(true)}
            className="flex items-center gap-1 rounded-[100px] bg-[#EFF1F6] py-3 pl-[30px] pr-5"
          >
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
