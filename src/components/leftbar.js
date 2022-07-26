import Add from "../icons/Add";
import Delete from "../icons/Delete";

const Leftbar = ({
  queries,
  addQuery,
  deleteQuery,
  selectedQuery,
  handleSelectQuery,
}) => {
  return (
    <>
      <div className="flex flex-col px-4 py-8 overflow-y-auto border-b lg:border-r lg:h-screen lg:w-64">
        <button
          onClick={addQuery}
          type="button"
          data-tooltip-target="tooltip-light"
          data-tooltip-style="light"
          className="w-10 justify-center inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <Add className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="space-y-3">
          {queries.map((item) => (
            <div key={item.key} className="cursor-pointer m-1 flex">
              <div
                className={`${
                  selectedQuery.key === item.key ? "text-green-700" : ""
                }`}
                onClick={() => handleSelectQuery(item)}
              >
                {item.name}
              </div>
              {!item.initial && (
                <button
                  className="text-red-700"
                  onClick={() => deleteQuery(item.key)}
                  type="button"
                >
                  <Delete className="h-5 w-5" aria-hidden="true" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Leftbar;
