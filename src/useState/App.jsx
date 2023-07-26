import { useState } from "react";
import List from "./list";
import "./App.css";

const arry = [
  { id: 0, task: "eating", ischecked: false, isedited: false, isdelete: false },
  {
    id: 1,
    task: "swimming",
    ischecked: false,
    isedited: false,
    isdelete: false,
  },
  {
    id: 2,
    task: "jogging",
    ischecked: false,
    isedited: false,
    isdelete: false,
  },
  { id: 3, task: "riding", ischecked: false, isedited: false, isdelete: false },
];

function App() {
  const [add, setadd] = useState("");
  const [state, setstate] = useState(arry);
  const [newid, setnewid] = useState(4);
  const [taskmajorarray, settaskmajorarray] = useState(arry);

  const handleInputChange = (e) => {
    setadd(e.target.value);
    setnewid(newid + 1); //index increase
    // set input 's value to the add variable
  };
  const addClick = () => {
    setstate([
      ...state,
      {
        id: newid,
        task: add,
        ischecked: false,
        isedited: false,
        isdelete: false,
      },
    ]);
  // old arry spread thay new value add thshe
    settaskchangeArray([
      ...taskmajorarray,
      {
        id: newid,
        task: add,
        ischecked: false,
        isedited: false,
        isdelete: false,
      },
    ]); 
    setadd(" ");//taskmajorarray ma true false change karelo change arry add thshe
    // for empty input after adding
  };

  // const [undoStack, setUndoStack] = useState([]);
  //   const undoClick = () => {
  //     if (undoStack.length > 0) {
  //       const previousItems = undoStack.pop();
  //       setItems(previousItems);
  //       setUndoStack(undoStack);
  //     }
  //   };
    
  const handlecomplete = () => {
    const CompleteList = taskmajorarray.filter(
      (x) => x.ischecked && !x.isdelete
    );
    setstate(CompleteList);
  };

  const handleNotComplete = () => {
    const PendingList = taskmajorarray.filter(
      (x) => x.ischecked === false && x.isdelete == false
    );
    setstate(PendingList);
  };

  const handleAlltask = () => {
    const list = taskmajorarray.filter((x) => !x.isdelete);
    setstate(list);
  };
  const handleUndotask = () => {
    const undotask = taskmajorarray.filter((x) => x.isdelete);
    setstate(undotask);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div className="inputheader">
          <div className="inputcantainer">
            <input
              class="input__field"
              type="text"
             defaultValue={add}
              onChange={handleInputChange}
              placeholder="✍️ Enter Task..."
            />
            <button className="addbtn" onClick={addClick}>
              ➕
            </button>
          </div>

          <div className="buttoncantainer">
            <button onClick={handleAlltask}>ALL</button>
            <button onClick={handlecomplete}>Completed</button>
            <button onClick={handleNotComplete}>Not Completed</button>
            <button
              onClick={() => {
                const newreverseArry = [...state];
                newreverseArry.reverse();
                setstate(newreverseArry);
              }}
            >
              Reverse
            </button>
            <button
              onClick={() => {
                undoClick(arry.id);
              }}
            >
              Undo
            </button>
          </div>
        </div>
      </div>
      <List
        arry={state}
        setarry={setstate}
        majorarry={taskmajorarray}
        setmajorarray={settaskmajorarray}
      />
    </>
  );
}

export default App;
