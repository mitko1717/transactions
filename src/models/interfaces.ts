import { Dispatch, SetStateAction } from "react";

export interface IState {
    data: IObject[] | null;
}

export interface IObject {
    TransactionId: number;
    Status: string;
    Type: string;
    ClientName: string;
    Amount: string;
}