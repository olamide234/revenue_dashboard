'use client';
import React, { useState } from 'react';
import NavBar from '@app/components/NavBar';
import RevenueDashboard from '@app/components/RevenueDashboard';
import SideBar from '@app/components/SideBar';
import FilterDialog from '@app/components/FilterDialog';
import { IFilter } from '@app/types/index';
// import CalendarFilter from '@app/components/CalendarFilter';

export default function Home() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [filters, setFilters] = useState<IFilter>({
    transaction_type: [],
    transaction_status: []
  })
  const handleFilter = (filters: object) => {
    setFilters((prevState: IFilter) => ({
      ...prevState,
      ...filters,
    }));
  };

  const overlay =
    'fixed w-full h-full top-0 right-0 left-0 bottom-0 bg-[#00000020] z-50 cursor-pointer';

  return (
    <main className="h-screen bg-white p-5 min-w-[700px]">
      <NavBar />
      <div className="flex h-[calc(100vh-110px)]">
        <div className='h-full flex items-center'>
        <div className="mb-16 hidden h-fit md:flex">
          <SideBar />
        </div>
        </div>
        <RevenueDashboard setfilterDialog={setOpenDialog} filters={filters}/>
        {/* <CalendarFilter
            onFilter={(filter: object) => handleFilter(filter)}
            enforceSingleDate
          /> */}
      </div>
      <div className={`${overlay} ${openDialog ? 'block' : 'hidden'}`}>
        <div onClick={() => setOpenDialog(false)} className='absolute w-full h-full'></div>
        <FilterDialog setfilterDialog={setOpenDialog} handleFilter={handleFilter} filters={filters}/>
      </div>
    </main>
  );
}
