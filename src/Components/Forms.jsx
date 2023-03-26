import React, { useState } from "react";

function Forms() {
  const [state, setstate] = useState({});
  const [task, setTask] = useState([]);
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // { id: `${todo}-${Date.now()}`, todo }
    const item={
      id:task.length === 0 ? 1: task[task.length-1].id+1,
      state:state
    }
    setTask([...task, state]);
  };

  const deleteHandler = (id)=>{
  const  deleteTask=task.filter()
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control "
            type="text"
            placeholder="firstname"
            onChange={handleChange}
            name="firstname"
          />
          <input
            type="text"
            placeholder="lastname"
            className="form-control "
            onChange={handleChange}
            name="lastname"
          />
          <input
            type="email"
            placeholder="email"
            className="form-control "
            onChange={handleChange}
            name="email"
          />
          <input
            type="tel"
            placeholder="phone number"
            className="form-control "
            onChange={handleChange}
            name="phone"
          />

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div>
        {" "}
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container bg-light">
          <table style={{ width: "100%", margin: "50px" }} border={1}>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {task.map((t) => {
                return (
                  <>
                    <tr>
                      <td>{t.firstname} </td>
                      <td>{t.lastname} </td>
                      <td>{t.email} </td>
                      <td>{t.phone} </td>
                      <td>
                        <button onClick={()=>deleteHandler(t)} className="btn">Delete</button>{" "}
                      </td>
                      <td>
                        <button className="btn">Edit</button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Forms;
