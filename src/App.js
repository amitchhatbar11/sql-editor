import { useState } from "react";
import "./App.css";
import Leftbar from "./components/leftbar";
import Main from "./components/main";
import employees from "./static/employees.json";
import products from "./static/products.json";
import { formatDate } from "./utils";

const initialQueries = [
  {
    key: "2022-07-19T16:11:00.439Z",
    name: "First query",
    queryJson: employees,
    query: "select * from employees;",
    initial: true,
  },
  {
    key: "2022-07-19T16:18:08.241Z",
    name: "Second query",
    queryJson: products,
    query: "select * from products;",
    initial: true,
  },
];

const App = () => {
  const [queries, setQueries] = useState([...initialQueries]);
  const [selectedQuery, setSelectedQuery] = useState(initialQueries[0]);

  const addQuery = () => {
    const dateTime = formatDate();
    const obj = {
      key: dateTime,
      name: `New query ${dateTime}`,
      queryJson: [],
      initial: false,
      query: "",
    };
    setQueries([...queries, obj]);
  };

  const deleteQuery = (key) => {
    setQueries((prevState) => {
      return prevState.filter((item) => item.key !== key);
    });
  };

  const handleSelectQuery = (query) => {
    setSelectedQuery(query);
  };

  return (
    <div className="pt-12 lg:flex">
      <Leftbar
        queries={queries}
        addQuery={addQuery}
        deleteQuery={deleteQuery}
        selectedQuery={selectedQuery}
        handleSelectQuery={handleSelectQuery}
      />
      <Main selectedQuery={selectedQuery} />
    </div>
  );
};

export default App;
