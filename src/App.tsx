// npx json-server --port 7000  --watch db.json

import { useGetDataQuery } from "./store/transactions/transactions.api";

function App() {
  const { isLoading, isError, data } = useGetDataQuery("");
  console.log(data);
  
  return (
    <div>
      HI
    </div>
  );
}

export default App;
