'use client';
import CautionIcon from '@app/assets/svg/CautionIcon';
import DownloadIcon from '@app/assets/svg/DownloadIcon';
import DropdownArrowIcon from '@app/assets/svg/DropdownArrowIcon';
import SlantDownArrow from '@app/assets/svg/SlantDownArrow';
import SlantUpArrow from '@app/assets/svg/SlantUpArrow';
import { IFilter } from '@app/types';
import React, { Dispatch, SetStateAction } from 'react';
import LineChart from './LineChart';

export default function RevenueDashboard({
  setfilterDialog,
  filters,
}: {
  setfilterDialog: Dispatch<SetStateAction<boolean>>;
  filters: IFilter;
}) {
  const colorPicker = () => {
    // return `"bg-[" + ${backgroundColor['OTHERS'] + "]"}`;
    return 'bg-[#E3FCF2]';
  };
  return (
    <div className="ml-5 mr-9 w-full lg:ml-20 lg:mr-36">
      <div className="my-16 flex justify-between gap-6">
        <div className="w-2/3">
          <div className="flex items-center gap-16">
            <div>
              <div className="mb-2 text-sm font-medium text-[#56616B]">
                Available Balance
              </div>
              <div className="text-2xl font-bold text-[#131316] lg:text-4xl">
                USD 120,500.00
              </div>
            </div>
            <button className="rounded-[100px] bg-[#131316] px-7 py-3.5 text-xs font-semibold text-white lg:text-base">
              Withdraw
            </button>
          </div>

          <LineChart data={graphData} />
        </div>
        <div className="flex w-1/3 min-w-fit flex-col gap-8">
          {/* [16.94rem] */}
          <div>
            <div className="mb-2 flex items-center justify-between gap-2 text-sm font-medium text-[#56616B]">
              Ledger Balance
              <CautionIcon />
            </div>
            <div className="text-xl font-bold text-[#131316] lg:text-[1.75rem]">
              USD 0.00
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between gap-2 text-sm font-medium text-[#56616B]">
              Total Payout
              <CautionIcon />
            </div>
            <div className="text-xl font-bold text-[#131316] lg:text-[1.75rem]">
              USD 55,080.00
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between gap-2 text-sm font-medium text-[#56616B]">
              Total Revenue
              <CautionIcon />
            </div>
            <div className="text-xl font-bold text-[#131316] lg:text-[1.75rem]">
              USD 175,580.00
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between gap-2 text-sm font-medium text-[#56616B]">
              Pending Payout
              <CautionIcon />
            </div>
            <div className="text-xl font-bold text-[#131316] lg:text-[1.75rem]">
              USD 0.00
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-6 border-b border-b-[#EFF1F6] pb-6">
          <div>
            <p className="text-xl font-bold text-[#131316] lg:text-2xl">
              24 Transactions
            </p>
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
        <div className="pt-10">
          <div className="flex h-[12rem] flex-col gap-6 overflow-auto pr-2">
            {Array(7)
              .fill('a')
              .map((item, index) => (
                <div key={index} className="flex gap-3 font-medium">
                  <div
                    className={`${backgroundColor['OTHERS']} flex h-12 w-12 items-center justify-center rounded-full`}
                  >
                    {index % 2 === 0 ? <SlantUpArrow /> : <SlantDownArrow />}
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <div className="text-[#131316]">Psychology of Money</div>
                      <div className="text-sm text-[#56616B]">Roy Cash</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[#131316]">USD 600</div>
                      <div className="text-sm text-[#56616B]">Apr 02,2022</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const backgroundColor = {
  OTHERS: 'bg-[#E3FCF2]',
  CASHWITHDRAWAL: 'bg-[#F9E3E0]',
};

const graphData = [
  {
    id: 'japan',
    color: 'hsl(26, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 283,
      },
      {
        x: 'helicopter',
        y: 132,
      },
      {
        x: 'boat',
        y: 125,
      },
      {
        x: 'train',
        y: 56,
      },
      {
        x: 'subway',
        y: 289,
      },
      {
        x: 'bus',
        y: 295,
      },
      {
        x: 'car',
        y: 45,
      },
      {
        x: 'moto',
        y: 167,
      },
      {
        x: 'bicycle',
        y: 137,
      },
      {
        x: 'horse',
        y: 197,
      },
      {
        x: 'skateboard',
        y: 132,
      },
      {
        x: 'others',
        y: 218,
      },
    ],
  },
];
