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
