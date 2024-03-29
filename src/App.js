import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setLoading(false);
    const localTodos = localStorage.getItem("todos");
    if (localTodos) setTodos(JSON.parse(localTodos));
    // eslint-disable-next-line
  }, []);

  const onComplete = (id) => {
    let list = todos;
    const item = list.findIndex((todo) => todo.id === id);
    list[item].completed = !list[item].completed;
    localStorage.setItem("todos", JSON.stringify(list));
    setTodos([...list]);
  };

  const onSubmit = (txt) => {
    const item = {
      completed: false,
      id: Date.now(),
      title: txt,
      userId: Date.now(),
    };
    setLoading(true);
    localStorage.setItem("todos", JSON.stringify([item, ...todos]));
    setTodos([item, ...todos]);
    setLoading(false);
  };
  const onDelete = (id) => {
    let items = todos.filter((item) => item.id !== id);
    setLoading(true);
    localStorage.setItem("todos", JSON.stringify([...items]));
    setTodos([...items]);
    setLoading(false);
  };

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className="container" style={{ minHeight: "75vh" }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TodoForm onSubmit={onSubmit} />
                  {todos.length > 0 ? (
                    <Todos
                      todos={todos}
                      onComplete={onComplete}
                      onDelete={onDelete}
                    />
                  ) : (
                    <div>
                      <h4 className="mt-5">No items added.</h4>
                    </div>
                  )}
                </>
              }
            />

            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
