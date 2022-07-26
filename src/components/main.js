import { useEffect, useState } from "react";
import Table from "./table";

const Main = ({ selectedQuery }) => {
  const [jsonData, setJsonData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    setQuery(selectedQuery.query);
    setJsonData([]);
    setColumns([]);
  }, [selectedQuery.key]);

  const runQuery = () => {
    if (!selectedQuery.queryJson.length) return;

    const headers = Object.keys(selectedQuery.queryJson[0]);

    const tableColumns = headers.map((header) => {
      return { Header: header, accessor: header };
    });
    setColumns([...tableColumns]);
    setJsonData([...selectedQuery.queryJson]);
  };

  return (
    <>
      <button
        type="button"
        onClick={runQuery}
        className="w-40 h-10 justify-center inline-flex items-center p-1.5 border shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Run Query
      </button>
      <div className="w-full h-full p-4 m-8 overflow-y-auto">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-black"
        >
          Query
        </label>
        <textarea
          id="message"
          rows="8"
          className="block p-2.5 w-full text-sm text-black rounded-lg border border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div>
          <Table data={jsonData} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default Main;
