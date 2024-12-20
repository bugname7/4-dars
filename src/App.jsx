import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  function validate() {
    if (name.length <= 0) {
      alert("malumot mavjud emas");
      return false;
    }
    return true;
  }
  function handleOk(e) {
    e.preventDefault();
    const isvalid = validate();
    if (!isvalid) {
      return;
    }
    const info = {
      name,
      id: Date.now(),
    };
    setData([...data, info]);
    setName("");
  }

  return (
    <div>
      <div className="bg-blue-300 w-[400px] mx-auto p-5 text-center mt-12 rounded-md shadow-md ">
        <h2 className="text-2xl font-medium mb-3">Todo List</h2>
        <form onSubmit={handleOk}>
          <input
            className="w-[80%] rounded-md py-1 px-3 mb-2 mr-2 focus:outline-none shadow-md"
            type="text"
            placeholder="work"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button className="bg-green-500 rounded-md text-white py-1 px-3 hover:bg-green-600">
            Add
          </button>
        </form>
      </div>

      <div className="bg-blue-300 w-[400px] mx-auto p-5 text-center mt-5 rounded-md shadow-md ">
        <ul>
          {data.length > 0 &&
            data.map((value) => {
              return (
                <div key={value.id}>
                  <li className="bg-white py-2 rounded-md mb-3 shadow-md cursor-move">
                    {value.name}
                  </li>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
