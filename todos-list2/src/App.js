import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Todos from './component/Todos';
import React, {useState, useEffect} from 'react';
import AddTodo from './component/AddTodo';
import About from './component/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo) =>{
    console.log("I am onDelete of todo", todo);

    setTodos(todos.filter((e)=> {
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) =>{
    console.log("i am adding todo", title, desc)
    let sno;
    if(todos.length===0){
      sno = 0
    }else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo) 
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
  return (
  <>
  <Router>
    <Header title = "MyTodos" searchBar={true}/>
      <Routes>
        <Route path="/" element={
          <>
          <AddTodo addTodo = {addTodo}/>
          <Todos todos = {todos} onDelete = {onDelete}/>
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    
    <Footer/>
    {/* <About/> */}
  </Router>  
  </>  
  );
}

export default App;
