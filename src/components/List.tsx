import { FC } from "react";
import { useActions } from "../hooks/actions";
import { IObject } from "../models/interfaces";
import ListItem from "./ListItem";
import { TABLE } from "../utils/TABLE";

export type IListProps = {
  list: IObject[] | undefined;
};

const List: FC<IListProps> = ({ list }) => {
  const { } = useActions(); 

  return (
    <div className="flex flex-col w-[60%] h-[50%]">
      <div className="w-full h-full m-2 border border-black border-solid p-4">
        <div className="flex w-full bg-slate-600 text-white font-bold">
          {TABLE.map(i => (
            <span key={i.name} style={{width: `${i.width}`}} className={`p-1 text-center`}>{i.name}</span>
          ))}
        </div>
        {list && list.map(l => <ListItem key={l.TransactionId} item={l}/>)}
      </div>
    </div>
  );
};

export default List;
