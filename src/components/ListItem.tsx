import { FC } from "react";
import { IObject } from "../models/interfaces";

export type IListItemProps = {
  item: IObject;
};

const ListItem: FC<IListItemProps> = ({ item }) => {
  return (
    <div
      className={`flex w-full ${
        item.TransactionId % 2 === 0 ? "bg-slate-400" : "bg-slate-300"
      }`}
    >
      <span className="p-1 text-center w-[10%]">{item.TransactionId}</span>
      <span className="p-1 text-center w-[15%]">{item.Status}</span>
      <span className="p-1 text-center w-[15%]">{item.Type}</span>
      <span className="p-1 text-center w-[20%]">{item.ClientName}</span>
      <span className="p-1 text-center w-[15%]">{item.Amount}</span>
      <span className="p-1 text-center w-[25%]">ACTIONS</span>
    </div>
  );
};

export default ListItem;
