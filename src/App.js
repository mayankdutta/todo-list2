import AddIcon from "@material-ui/icons/Add";

function App() {
  return (
    <div className="items-center bg-gray-400 my-80 grid place-items-center place-content-center">
      <div className="p-8 bg-white">
        <div className=""> Todo List </div>
        <div className="">
          <input type="text" placeholder="item ka naam likh" value="" />
          <button className="">
            <Icon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
