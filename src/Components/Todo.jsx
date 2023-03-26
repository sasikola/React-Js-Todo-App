import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([...todos, { id: `${todo}-${Date.now()}`, todo }]);
      setTodo("");
    }
  };

  const deleteHandler = (id) => {
    const deleteTodo = todos.filter((to) => to.id !== id);
    setTodos([...deleteTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <>
      <div className="container-sm bg-dark">
        <h1 className="text-info">Todo App</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTodo(e.target.value)}
            className="form-control mt-2 mb-3 text-center"
            type="text"
            value={todo}
          />
          <div>
            <button type="submit" className="btn btn-primary">
              {editId ? "Update" : "Add Todo!"}
            </button>
          </div>
        </form>
        <div>
          {todos.map((t) => {
            return (
              <>
                <div className="container bg-info mt-2">
                  <p className="todo" key={t.id}>
                    {t.todo}
                  </p>
                  <button
                    onClick={() => deleteHandler(t.id)}
                    className="btn btn-danger mx-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(t.id)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
