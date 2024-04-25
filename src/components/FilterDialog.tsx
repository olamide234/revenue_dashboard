import React, { Dispatch, SetStateAction, useState } from 'react';
import { IFilter } from '@app/types/index';
import CloseIcon from '@app/assets/svg/CloseIcon';
import CalendarFilter, { IDatePayload } from './CalendarFilter';
import SelectDropdown, { IOpenDropdownType } from './SelectDropdown';

export default function FilterDialog({
  setfilterDialog,
  filters,
  handleFilter,
}: {
  setfilterDialog: Dispatch<SetStateAction<boolean>>;
  filters: IFilter;
  handleFilter: Dispatch<SetStateAction<IFilter>>;
}) {
  const [dateFilters, setDateFilters] = useState<IDatePayload>({});

  const [openDropDownType, setOpenDropDownType] = useState<IOpenDropdownType>({
    state: false,
    value: [],
  });
  const [openDropDownStatus, setOpenDropDownStatus] =
    useState<IOpenDropdownType>({
      state: false,
      value: [],
    });

  const closeOtherModal = () => {
    openDropDownType &&
      setOpenDropDownType((prev) => ({ ...prev, state: false }));
    openDropDownStatus &&
      setOpenDropDownStatus((prev) => ({ ...prev, state: false }));
  };

  const handleCloseDialog = () => {
    setfilterDialog(false);
    closeOtherModal();
  };

  const applyFilter = () => {
    const allFilters = {
      ...dateFilters,
      transaction_type: openDropDownType.value,
      transaction_status: openDropDownStatus.value,
    };
    handleFilter(allFilters);
    handleCloseDialog();
  };
  const clearFilter = () => {
    const allFilters = {
      start_date: undefined,
      end_date: undefined,
      transaction_type: [],
      transaction_status: [],
    };
    setDateFilters({});
    setOpenDropDownType({
      state: false,
      value: [],
    });
    setOpenDropDownStatus({
      state: false,
      value: [],
    });
    handleFilter(allFilters);
    handleCloseDialog();
  };

  const activeButtons =
    dateFilters?.end_date ||
    dateFilters?.start_date ||
    openDropDownType.value.length > 0 ||
    openDropDownStatus.value.length > 0;
  const inactiveApplyButton = 'bg-[#DBDEE5] text-white';
  const activeApplyButton = 'bg-[#131316] text-white';
  return (
    <div className="absolute bottom-2 right-2 top-2 w-1/3 min-w-[28.5rem] rounded-[20px] bg-white shadow-dialogShadow">
      <div onClick={closeOtherModal} className="absolute h-full w-full"></div>
      <div className="flex items-center justify-between rounded-t-[20px] border-2 border-white px-6 py-5">
        <h3 className="text-2xl font-bold text-[#131316]">Filter</h3>
        <button
          onClick={handleCloseDialog}
          className="z-20 rounded-lg p-2 hover:bg-[#EFF1F6]"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="flex flex-col gap-6 px-[22px]">
        <CalendarFilter
          onFilter={(filter: object) =>
            setDateFilters((prev) => ({ ...prev, ...filter }))
          }
          closeOtherModal={closeOtherModal}
          reset={filters?.end_date === undefined && filters?.start_date === undefined}
        />
        <SelectDropdown
          openDropDown={openDropDownType}
          setOpenDropDown={(val) => {
            openDropDownStatus &&
            setOpenDropDownStatus((prev) => ({ ...prev, state: false }));
            setOpenDropDownType(val);
          }}
          optionList={transactionTypes}
          label="Transaction Type"
          id="transaction_type"
        />
        <SelectDropdown
          openDropDown={openDropDownStatus}
          setOpenDropDown={(val) => {
            openDropDownType &&
            setOpenDropDownType((prev) => ({ ...prev, state: false }));
            setOpenDropDownStatus(val);
          }}
          optionList={transactionStatus}
          label="Transaction Status"
          id="transaction_status"
        />
      </div>
      <div className="absolute bottom-0 flex w-full gap-3 rounded-b-[20px] border-2 border-white px-6 py-5">
        <button
          disabled={!activeButtons}
          onClick={clearFilter}
          className="w-1/2 rounded-[100px] border border-[#EFF1F6] px-6 py-3 font-semibold text-[#131316] hover:bg-[#EFF1F6]"
        >
          Clear
        </button>
        <button
          disabled={!activeButtons}
          onClick={applyFilter}
          className={`w-1/2 rounded-[100px] border border-[#EFF1F6] px-6 py-3 font-semibold ${activeButtons ? activeApplyButton : inactiveApplyButton}`}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

const transactionTypes = [
  { name: 'Store Transactions', value: 'Store Transactions' },
  { name: 'Get Tipped', value: 'Get Tipped' },
  { name: 'Withdrawals', value: 'Withdrawals' },
  { name: 'Chargebacks', value: 'Chargebacks' },
  { name: 'Cashbacks', value: 'Cashbacks' },
  { name: 'Refer & Earn', value: 'Refer & Earn' },
];

const transactionStatus = [
  { name: 'Successful', value: 'Successful' },
  { name: 'Pending', value: 'Pending' },
  { name: 'Failed', value: 'Failed' },
];
