import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, settask] = useState("");
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const handleSubmit = () => {
    // console.log("task", task);
    if (task === "") {
      alert("Please enter task");
    } else {
      setdata((prev) => [...prev, task]);

      console.log([...data]);
    }
  };

  const handleSearch = () => {
    // console.log(search);
    if (search === "") {
      alert("Please enter task");
    } else {
      let newData = data.filter((ite) => ite === search);
      setdata([...newData]);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <input
            type="text"
            placeholder="Enter Title"
            onChange={(e) => {
              settask(e.target.value);
            }}
            value={task}
            className="form-control"
          />
        </div>
        <div className="row" style={{ marginTop: "10px" }}>
          <button type="button" onClick={handleSubmit} className="button">
            Submit
          </button>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="left">
            <input
              type="text"
              name="search"
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
          </div>
          <div className="right">
            <button type="button" className="button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      <table className="table">
        <tr>
          <th>Slno</th>
          <th>Task Name</th>
        </tr>
        {data &&
          data.map((ite, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{ite}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default App;
