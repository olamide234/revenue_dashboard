import { IFilter } from '@app/types/index';
import { IUserTransaction } from '@app/components/RevenueDashboard';

export default function useFilterTransaction(
  transactions: IUserTransaction[] | undefined,
  filters: IFilter,
  setFilters: (value: { (val: IFilter): IFilter }) => void
) {
  const handleFilter = (filters: object) => {
    setFilters((prevState: IFilter) => ({
      ...prevState,
      ...filters,
    }));
  };
  const standardizedDateInTransactions = transactions?.map((transaction) => ({
    ...transaction,
    date: new Date(transaction.date),
  }));

  const filteredTransactionData = standardizedDateInTransactions?.filter(
    (transaction) => {
      const { start_date, end_date, transaction_type, transaction_status } =
        filters;
      const { date, status, type } = transaction;
      const startDate = start_date ? new Date(start_date as string) : undefined;
      const endDate = end_date ? new Date(end_date as string) : undefined;
      // console.log('ash', startDate, endDate);
      let dateCheck;
      if (start_date && end_date) {
        // console.log(date >= startDate, date <= endDate, 'ash1');
        dateCheck = date >= (startDate as Date) && date <= (endDate as Date);
        // return (
        //    date >= (startDate as Date) &&
        //   date <= (endDate as Date) &&
        //   (transaction_type?.includes(apiTypeEquivalent[type]) ||
        //     transaction_status?.includes(apiStatusEquivalent[status]))
        // );
      } else if (start_date && !end_date) {
        // console.log('ash2');
        dateCheck = date >= (startDate as Date);
        // return (
        //   date >= (startDate as Date) &&
        //   (transaction_type?.includes(apiTypeEquivalent[type]) ||
        //     transaction_status?.includes(apiStatusEquivalent[status]))
        // );
      } else if (!start_date && end_date) {
        // console.log('ash3');
        dateCheck = date <= (endDate as Date);
        // return (
        //    date <= (endDate as Date) &&
        //   (transaction_type?.includes(apiTypeEquivalent[type]) ||
        //     transaction_status?.includes(apiStatusEquivalent[status]))
        // );
      } else if (
        !start_date &&
        !end_date &&
        (transaction_type?.length > 0 || transaction_status?.length > 0)
      ) {
        // console.log(
        //   transaction_type?.includes(apiTypeEquivalent[type]),
        //   'ash4'
        // );
        dateCheck = true;
        // return (
        //   transaction_type?.includes(apiTypeEquivalent[type]) ||
        //   transaction_status?.includes(apiStatusEquivalent[status])
        // );
      }

      if (transaction_type?.length > 0 || transaction_status?.length > 0) {
        // console.log(
        //   transaction_type?.includes(apiTypeEquivalent[type]),
        //   'ash5'
        // );
        return (
          dateCheck &&
          (transaction_type?.includes(apiTypeEquivalent[type]) ||
            transaction_status?.includes(apiStatusEquivalent[status]))
        );
      } else if (
        (start_date || end_date) &&
        (transaction_type?.length == 0 || transaction_status?.length == 0)
      ) {
        // console.log(
        //   transaction_type?.includes(apiTypeEquivalent[type]),
        //   'ash6'
        // );
        return dateCheck;
      }
      return transaction;
    }
  );

  return { handleFilter, filteredTransactionData };
}

const apiTypeEquivalent = {
  withdrawal: 'Withdrawals',
  deposit: 'Deposit',
};

const apiStatusEquivalent = {
  successful: 'Successful',
  pending: 'Pending',
  failed: 'Failed',
};
