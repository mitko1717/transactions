// npx json-server --port 7000  --watch db.json
import { useGetDataQuery } from "./store/transactions/transactions.api";
import List from "./components/List";
import { useEffect, useState } from "react";
import { IObject } from "./models/interfaces";
import { Pagination } from "./components/Pagination";
import { useAppSelector } from "./hooks/redux";

function App() {
  const { isLoading, isError, data } = useGetDataQuery("");
  const { filteredList } = useAppSelector((state) => state.transactions);

  const [currentRecords, setCurrentRecords] = useState<IObject[]>([]);
  // const [filteredStories, setFilteredStories] = useState<IObject[]>(data && data?.length > 0 ? data : []);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const recordsPerPage = 10
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  useEffect(() => {
    if (filteredList !== null && filteredList?.length > 0)
    setCurrentRecords(
      filteredList.slice(indexOfFirstRecord, indexOfLastRecord)
    );
  }, [currentPage, filteredList]);

  const nPages: number = data && Math.ceil(data.length / recordsPerPage) || 1;
  
  return (
    <div className="w-full h-[100vh] bg-slate-400">
      <List list={currentRecords} />
      {data && data.length > 0 && (
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
    </div>
  );
}

export default App;
