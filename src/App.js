import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [arr, setArr] = useState([]);
  const [cut, setCut] = useState([]);

  const takeInput = (event) => {
    setData(event.target.value);
  };
  const done = () => {
    setArr(function () {
      return [...arr, data];
    });

    setCut(function () {
      return [...cut, data];
    });
    setData("");
  };

  const del = (id) => {
    /*
    setArr(function () {
      return arr.filter((val, index) => {
        return index !== id;
      });
    });
    */

    setCut(function () {
      return cut.map((val, index) => {
        return index === id ? "0" : val;
      });
    });
  };

  const buttons =
    "text-6xl text-gray-200 font-light bg-green-600 border-8 border-transparent rounded-full shadow-2xl h-20 w-20 hover:text-green-600 hover:bg-white";
  return (
    <div className="items-center my-80 grid place-items-center place-content-center">
      <div className="py-4 bg-gray-200 border-8 border-transparent hover:border-green-600 rounded-3xl space-y-8">
        <div className="p-2 my-4 font-light text-center text-white bg-green-600 text-8xl">
          Todo List
        </div>
        <div className="px-8 space-x-2">
          <input
            type="text"
            placeholder="item ka naam likh"
            value={data}
            onChange={takeInput}
            className="p-4 font-sans text-4xl bg-gray-200 border-b-8 border-transparent outline-none focus:border-green-600"
          />
          <button onClick={done} className={buttons}>
            +
          </button>
        </div>

        {arr.map((d, index) => {
          return (
            <div
              key={index}
              id={index}
              className="items-center px-8 font-sans text-4xl grid grid-rows-1 grid-cols-4 gap-x-0 justify-items-center"
            >
              <button className={buttons} onClick={() => del(index)}>
                x
              </button>
              {cut[index] !== "0" ? (
                <span className=""> {d} </span>
              ) : (
                <span className="text-gray-500 line-through "> {d} </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
