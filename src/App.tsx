// npx json-server --port 7000  --watch db.json
import { useGetDataQuery } from "./store/transactions/transactions.api";
import List from "./components/List";
import { useEffect, useState } from "react";
import { IObject } from "./models/interfaces";
import { Pagination } from "./components/Pagination";
import { useAppSelector } from "./hooks/redux";
import Header from "./components/Header";
import { useActions } from "./hooks/actions";
import SelectStatus from "./components/StatusSelect";

function App() {
  const { isLoading, isError, data } = useGetDataQuery("");
  const { filteredList, statusFilter, typeFilter } = useAppSelector((state) => state.transactions);
  const { setFilters } = useActions();

  const [currentRecords, setCurrentRecords] = useState<IObject[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const recordsPerPage = 10;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  useEffect(() => {
    if (filteredList !== null && filteredList?.length > 0)
      setCurrentRecords(
        filteredList.slice(indexOfFirstRecord, indexOfLastRecord)
      );
  }, [currentPage, filteredList]);

  const nPages: number = (data && Math.ceil(data.length / recordsPerPage)) || 1;

  useEffect(() => {
    setFilters()
  }, [statusFilter, typeFilter])

  return (
    <div className="w-full h-[100vh] bg-slate-400 p-4">
      <Header />
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
