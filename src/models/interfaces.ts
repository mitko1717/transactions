import { Dispatch, SetStateAction } from "react";

export interface IState {
    dataList: IObject[] | null;
    filteredList: IObject[];
}

export interface IObject {
    TransactionId: number;
    Status: string;
    Type: string;
    ClientName: string;
    Amount: string;
}

export type PaginationProps = {
  nPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};