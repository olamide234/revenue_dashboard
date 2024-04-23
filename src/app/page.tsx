'use client';
import React, { useState } from 'react';
import NavBar from '@app/components/NavBar';
import RevenueDashboard from '@app/components/RevenueDashboard';
import SideBar from '@app/components/SideBar';
import FilterDialog from '@app/components/FilterDialog';
import { IFilter } from '@app/types/index';

export default function Home() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [filters, setFilters] = useState<IFilter>({
    transaction_type: [],
    transaction_status: []
  })
  const overlay =
    'fixed w-full h-full top-0 right-0 left-0 bottom-0 bg-[#00000080] z-50 cursor-pointer';

  return (
    <main className="h-screen bg-white p-5">
      <NavBar />
      <div className="flex h-[calc(100vh-110px)] items-center">
        <div className="mb-16 hidden h-fit md:flex">
          <SideBar />
        </div>
        <RevenueDashboard setfilterDialog={setOpenDialog} />
      </div>
      <div className={`${overlay} ${openDialog ? 'block' : 'hidden'}`}>
        <FilterDialog setfilterDialog={setOpenDialog} setFilters={setFilters}/>
      </div>
    </main>
  );
}
