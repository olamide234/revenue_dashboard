'use client';
import React, { useState, useEffect } from 'react';
import NavBar from '@app/components/NavBar';
import RevenueDashboard from '@app/components/RevenueDashboard';
import SideBar from '@app/components/SideBar';
import FilterDialog from '@app/components/FilterDialog';
import { IFilter } from '@app/types/index';
import LoaderWrapper from '@app/components/LoaderWrapper';
import useFilterTransaction from '@app/utils/useFilterTransaction';

export default function Home() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [filters, setFilters] = useState<IFilter>({
    transaction_type: [],
    transaction_status: [],
  });
  const [user, setUser] = useState();
  const [wallet, setWallet] = useState();
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    (() => {
      try {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON in the response
          })
          .then((data) => {
            setUser(data);
            return;
          })
          .catch((err) => {
            console.log(err);
            return;
          });
      } catch (error) {
        console.log('Please check your internet!', error);
      }
    })();
  }, []);

  useEffect(() => {
    (() => {
      try {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/wallet`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON in the response
          })
          .then((data) => {
            setWallet(data);
            return;
          })
          .catch((err) => {
            console.log(err);
            return;
          });
      } catch (error) {
        console.log('Please check your internet!', error);
      }
    })();
  }, []);

  useEffect(() => {
    (() => {
      try {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/transactions`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON in the response
          })
          .then((data) => {
            setTransactions(data);
            return;
          })
          .catch((err) => {
            console.log(err);
            return;
          });
      } catch (error) {
        console.log('Please check your internet!', error);
      }
    })();
  }, []);

  const { handleFilter, filteredTransactionData } = useFilterTransaction(
    transactions,
    filters,
    setFilters
  );

  const overlay =
    'fixed w-full h-full top-0 right-0 left-0 bottom-0 bg-[#00000020] z-10 cursor-pointer';

  return (
    <main className="h-screen min-w-[700px] bg-white p-5">
      <NavBar userData={user} />

      <div className="flex h-[calc(100vh-110px)]">
        <div className="flex h-full items-center">
          <div className="mb-16 hidden h-fit md:flex">
            <SideBar />
          </div>
        </div>
        <LoaderWrapper
          loading={wallet === undefined || transactions === undefined}
        >
          <RevenueDashboard
            setfilterDialog={setOpenDialog}
            filters={filters}
            userWallet={wallet}
            userTransactions={filteredTransactionData}
          />
        </LoaderWrapper>
      </div>
      <div className={`${overlay} ${openDialog ? 'block' : 'hidden'}`}>
        <div
          onClick={() => setOpenDialog(false)}
          className="absolute h-full w-full"
        ></div>
        <FilterDialog
          setfilterDialog={setOpenDialog}
          handleFilter={handleFilter}
          filters={filters}
        />
      </div>
    </main>
  );
}
