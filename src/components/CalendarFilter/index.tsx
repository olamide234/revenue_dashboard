import React, { useEffect, useState, forwardRef } from 'react';
import InputLabel from '../InputLabel';
import { ICalendarFilterProps, IFilter } from '../../types';
import {
  subMonths,
  endOfMonth,
  subDays,
  startOfDay,
  endOfDay,
  startOfMonth,
} from 'date-fns';

import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import '@app/styles/react-datepicker.css';
// import UpArrowIcon from '@app/assets/svg/UpArrowIcon';
import DropdownArrowIcon from '@app/assets/svg/DropdownArrowIcon';

export interface IDatePayload
  extends Pick<IFilter, 'end_date' | 'start_date'> {}

const dateEvents = [
  {
    name: 'Today',
    value: 'today',
  },
  {
    name: 'Last 7 days',
    value: 'last-seven-days',
  },
  {
    name: 'This month',
    value: 'this-month',
  },
  {
    name: 'Last 3 months',
    value: 'last-3-months',
  },
];

export default function CalendarFilter(props: ICalendarFilterProps) {
  const { onFilter, closeOtherModal } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  // const [calendarOpen, setCalendarOpen] = useState({ value: '', state: false });

  const unselectedRangeFilter = 'bg-white text-[#131316]';
  const selectedRangeFilter = 'bg-[#131316] text-white';

  useEffect(() => {
    const currentDate = new Date();
    switch (selectedItem) {
      case 'today':
        handleSelectRange({ startDate: new Date(), endDate: new Date() });
        break;
      case 'last-seven-days':
        handleSelectRange({
          startDate: subDays(startOfDay(currentDate), 6),
          endDate: endOfDay(currentDate),
        });
        break;
      case 'this-month':
        handleSelectRange({
          startDate: startOfMonth(currentDate),
          endDate: endOfMonth(currentDate),
        });
        break;
      case 'last-3-months':
        handleSelectRange({
          startDate: subMonths(currentDate, 3),
          endDate: endOfMonth(currentDate),
        });
        break;
      case null:
        break;

      default:
        handleSelectRange({ startDate: new Date(), endDate: new Date() });
        break;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  const CustomInput = forwardRef<
    HTMLButtonElement,
    React.ComponentProps<'button'>
  >((props, ref) => (
    <button
      className={`flex w-full items-center gap-2.5 rounded-xl px-4 py-3.5 ${'border border-[#EFF1F6] bg-[#EFF1F6]'}`}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        closeOtherModal();
        props.onClick?.(e);
      }}
      ref={ref}
    >
      <div className="w-full text-left">{props.value}</div>

      <DropdownArrowIcon width="8.83px" height="5.02px" />
    </button>
  ));

  // const CustomInput = forwardRef<
  //   HTMLButtonElement,
  //   React.ComponentProps<'button'>
  // >((props, ref) => {
  //   const isCalendarOpen = calendarOpen.state && calendarOpen.value === props.value;
  //   return (
  //     <button
  //       className={`flex w-full items-center gap-2.5 rounded-xl px-4 py-3.5 ${isCalendarOpen ? 'border-[3px] border-[#131316] bg-white' : 'border border-[#EFF1F6] bg-[#EFF1F6]'}`}
  //       onClick={(e) => {
  //         setCalendarOpen({ value: props.value as string, state: true });
  //         props.onClick?.(e);
  //       }}
  //       ref={ref}
  //     >
  //       <div className="w-full text-left">{props.value}</div>
  //       {isCalendarOpen ? (
  //         <UpArrowIcon />
  //       ) : (
  //         <DropdownArrowIcon width="8.83px" height="5.02px" />
  //       )}
  //     </button>
  //   );
  // });

  const handleSelectRange = (dates: { startDate: Date; endDate: Date }) => {
    const { startDate: start, endDate: end } = dates;
    setStartDate(start);
    setEndDate(end);
    const payload: Pick<IFilter, 'start_date' | 'end_date'> = {};

    if (end && start) {
      payload.end_date = format(new Date(end), 'yyyy-MM-dd');
      payload.start_date = format(new Date(start), 'yyyy-MM-dd');
    }

    if (payload.start_date && payload.end_date) {
      return onFilter(payload as IDatePayload);
    }
  };

  return (
    <div>
      <div className="mb-5 flex gap-3">
        {dateEvents.map((v) => (
          <div
            key={v.value}
            onClick={() => {
              closeOtherModal();
              setSelectedItem(v.value);
            }}
            className={`${selectedItem === v.value ? selectedRangeFilter : unselectedRangeFilter} z-20 cursor-pointer text-nowrap rounded-[100px] border border-[#EFF1F6] px-[10px] py-2 text-sm font-semibold text-[#131316]`}
          >
            {v.name}
          </div>
        ))}
      </div>
      <div>
        <InputLabel label="Date Range" />
        <div className="flex gap-[6px]">
          <div className="w-1/2">
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setSelectedItem(null);
                setStartDate(date as Date);
                onFilter({
                  start_date: format(new Date(date as Date), 'yyyy-MM-dd'),
                } as IDatePayload);
                // calendarOpen.state && setCalendarOpen({ value: '', state: false });
              }}
              // onBlur={()=>setCalendarOpen({ value: '', state: false })}
              startDate={startDate}
              selectsStart
              maxDate={startDate ? endDate : undefined}
              useWeekdaysShort={true}
              customInput={<CustomInput />}
              dateFormat="dd MMM YYYY"
              showPopperArrow={false}
              placeholderText="Click to select a date"
            />
          </div>
          <div className="w-1/2">
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                setSelectedItem(null);
                setEndDate(date as Date);
                onFilter({
                  end_date: format(new Date(date as Date), 'yyyy-MM-dd'),
                } as IDatePayload);
                // calendarOpen.state && setCalendarOpen({ value: '', state: false });
              }}
              endDate={endDate}
              selectsEnd
              minDate={endDate ? startDate : undefined}
              useWeekdaysShort={true}
              customInput={<CustomInput />}
              dateFormat="dd MMM YYYY"
              showPopperArrow={false}
              placeholderText="Click to select a date"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
