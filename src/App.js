
// import Header from './MyComponent/Header';
// import { Todoitem } from './MyComponent/Todoitem';
// import { AddTodo } from './MyComponent/AddTodo';
// import { Footer } from './MyComponent/Footer';
// import { About } from './MyComponent/About';
// import React, { useState, useEffect } from 'react';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    //Deleting in react does not works this way
    // let index= todo.indexOf(todo);
    // todo.splice(index,1);
    setTodo(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo- ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodo([...todos, myTodo]);
    console.log(myTodo);



  }
  const [todos, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    hiii
  );
}

export default App;
