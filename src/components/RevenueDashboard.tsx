'use client';
import CautionIcon from '@app/assets/svg/CautionIcon';
import DownloadIcon from '@app/assets/svg/DownloadIcon';
import DropdownArrowIcon from '@app/assets/svg/DropdownArrowIcon';
import SlantDownArrow from '@app/assets/svg/SlantDownArrow';
import SlantUpArrow from '@app/assets/svg/SlantUpArrow';
import { IFilter } from '@app/types';
import React, { Dispatch, SetStateAction } from 'react';
import LineChart, { IExpectedData } from './LineChart';
import numberWithCommas from '@app/utils/numberWithCommas';
import { numberWithCommasNR } from '@app/utils/numberWithCommas';
import capitalizeFirstLetter from '@app/utils/capitalizeFirstLetter';
import { IStatus, ITransactionAvatarBgColor } from '@app/types';
import { format } from 'date-fns';

interface IUserWallet {
  balance: number;
  ledger_balance: number;
  pending_payout: number;
  total_payout: number;
  total_revenue: number;
}
interface ITransactionMetaData {
  country: string;
  email: string;
  name: string;
  product_name: string;
  quantity: number;
  type: string;
}
interface IUserTransaction {
  amount: number;
  date: string;
  metadata: ITransactionMetaData;
  payment_reference: string;
  status: keyof IStatus;
  type: keyof ITransactionAvatarBgColor;
}

export default function RevenueDashboard({
  setfilterDialog,
  filters,
  userWallet,
  userTransactions,
}: {
  setfilterDialog: Dispatch<SetStateAction<boolean>>;
  filters: IFilter;
  userWallet: IUserWallet | undefined;
  userTransactions: IUserTransaction[] | undefined;
}) {
  const graphData = (): IExpectedData => {
    const dateRangeData: string[] = [];
    const transactions = userTransactions
      ? userTransactions?.map((userTransaction, index) => {
          dateRangeData.push(userTransaction.date);
          return {
            x: String(index),
            y: userTransaction?.amount,
          };
        })
      : [];
    const progressingTransactions = transactions.reverse();
    const gD = [
      {
        id: 'payment',
        color: 'hsl(19, 100%, 51%)',
        data: progressingTransactions,
      },
    ];

    return { graphData: gD, dateRangeData: dateRangeData };
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
                {`USD ${userWallet?.balance}`}
              </div>
            </div>
            <button className="rounded-[100px] bg-[#131316] px-7 py-3.5 text-xs font-semibold text-white lg:text-base">
              Withdraw
            </button>
          </div>

          <LineChart data={graphData()} />
        </div>
        <div className="flex w-1/3 min-w-fit max-w-[16.94rem] flex-col gap-8">
          <div>
            <div className="mb-2 flex items-center justify-between gap-2 text-sm font-medium text-[#56616B]">
              Ledger Balance
              <CautionIcon />
            </div>
            <div className="text-xl font-bold text-[#131316] lg:text-[1.75rem]">
              {`USD ${userWallet && numberWithCommas(userWallet?.ledger_balance)}`}
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between gap-2 text-sm font-medium text-[#56616B]">
              Total Payout
              <CautionIcon />
            </div>
            <div className="text-xl font-bold text-[#131316] lg:text-[1.75rem]">
              {`USD ${userWallet && numberWithCommas(userWallet?.total_payout)}`}
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between gap-2 text-sm font-medium text-[#56616B]">
              Total Revenue
              <CautionIcon />
            </div>
            <div className="text-xl font-bold text-[#131316] lg:text-[1.75rem]">
              {`USD ${userWallet && numberWithCommas(userWallet?.total_revenue)}`}
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between gap-2 text-sm font-medium text-[#56616B]">
              Pending Payout
              <CautionIcon />
            </div>
            <div className="text-xl font-bold text-[#131316] lg:text-[1.75rem]">
              {`USD ${userWallet && numberWithCommas(userWallet?.total_payout)}`}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-6 border-b border-b-[#EFF1F6] pb-6">
          <div>
            <p className="text-xl font-bold text-[#131316] lg:text-2xl">
              {`${userTransactions && userTransactions?.length} Transactions`}
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
            {userTransactions?.map((userTransaction, index) => (
              <div key={index} className="flex gap-3 font-medium">
                <div
                  className={`${userTransaction?.metadata?.product_name ? 'bg-[#E3FCF2]' : backgroundColor[userTransaction?.type]} flex h-12 w-12 items-center justify-center rounded-full`}
                >
                  {userTransaction?.type === 'withdrawal' ? (
                    <SlantUpArrow />
                  ) : (
                    <SlantDownArrow />
                  )}
                </div>
                <div className="flex w-full items-center justify-between">
                  <div>
                    <div className="text-[#131316]">
                      {userTransaction?.metadata?.product_name
                        ? userTransaction?.metadata?.product_name
                        : `Cash ${userTransaction?.type}`}
                    </div>
                    <div
                      className={`text-sm ${userTransaction?.metadata?.name ? 'text-[#56616B]' : transactionTextColor[userTransaction?.status]}`}
                    >{`${userTransaction?.metadata?.name ? capitalizeFirstLetter(userTransaction?.metadata?.name) : capitalizeFirstLetter(userTransaction?.status)}`}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#131316]">{`USD ${numberWithCommasNR(userTransaction?.amount)}`}</div>
                    <div className="text-sm text-[#56616B]">{`${format(new Date(userTransaction?.date), 'PP')}`}</div>
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

const backgroundColor: ITransactionAvatarBgColor = {
  withdrawal: 'bg-[#F9E3E0]',
  deposit: 'bg-[#E3FCF2]',
};

const transactionTextColor: IStatus = {
  successful: 'text-[#0EA163]',
  pending: 'text-[#A77A07]',
};
