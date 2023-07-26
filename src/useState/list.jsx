<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;
import { useState } from "react";
import "./list.css";

const List = ({ arry, setarry, majorarry, setmajorarray }) => {
  const [editinputvalue, seteditinputvalue] = useState("");

  const deletehandler = (id) => {
    const afterdeletelist = arry.filter((x) => x.id !== id);
    console.log(majorarry);
    const changedeletd = majorarry.map((x) => {
      console.log(x.isdelete);
      if (x.id == id) {
        const data = { ...x, isdelete: !x.isdelete };

        return data;
      }
      return x;
    });

    console.log(changedeletd);
    setmajorarray(changedeletd);
    setarry(afterdeletelist);
  };

  const handelCheckbox = (id) => {
    const newArry = arry.map((data) => {
      if (data.id === id) {
        return { ...data, ischecked: !data.ischecked ? true : false };
      } else {
        return data;
      }
    });

    const listarry = majorarry.map((data) => {
      if (data.id === id) {
        return { ...data, ischecked: !data.ischecked ? true : false };
      } else {
        return data;
      }
    });
    setarry(newArry);
    setmajorarray(listarry);
    // console.log(newArry)
  };
  const edithandler = (id) => {
    const list = arry.map((x) => {
      if (x.id == id) {
        if (x.isedited) {
          return { ...x, task: editinputvalue, isedited: !x.isedited };
        }
        return { ...x, isedited: !x.isedited };
      } else {
        return x;
      }
    });
    
    const listarry = majorarry.map((x) => {
      if (x.id == id) {
        return { ...x, task: editinputvalue };
      } else {
        return x;
      }
    });

    setarry(list);
    setmajorarray(listarry);
  };

  const edittask = (e) => {
    seteditinputvalue(e.target.value);
  };

  const list = arry.map((x) => (
    <li class="table-header" key={x.id}>
      {x.isedited && (
        <input
          className="editinput"
          type="text"
          onChange={edittask}
          defaultValue={x.task}
        />
      )}
      {!x.isedited && (
        <input
          type="checkbox"
          onChange={() => {
            handelCheckbox(x.id);
          }}
          defaultChecked={x.ischecked ? true : false}
        />
      )}
      {!x.isedited && x.task}
      &nbsp;
      <div className="delete_edit_btn">
        <button
          onClick={() => {
            deletehandler(x.id);
          }}
        >
          🗑️
        </button>
        <button
          onClick={() => {
            edithandler(x.id);
          }}
        >
          ✏️
        </button>
      </div>
    </li>
  ));
  return (
    <>
      <div class="container">
        <ul class="responsive-table"> {list}</ul>
      </div>
    </>
  );
};
export default List;
