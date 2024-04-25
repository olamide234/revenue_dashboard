/* eslint-disable @typescript-eslint/no-explicit-any */ 

export interface ImageProps {
  width?: string;
  height?: string;
  color?: string;
}

export interface IFilter {
  start_date?: string;
  end_date?: string;
  transaction_type?: string[];
  transaction_status?: string[];
}

export interface ICalendarFilterProps {
  onFilter: (filter: {
    start_date?: string;
    end_date?: string;
  }) => void;
}

export interface IStatus {
  successful: string;
  pending: string;
}

export interface ITransactionAvatarBgColor {
  withdrawal: string;
  deposit: string;
}