import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todos,setTodos] = useState(
    [
      {
        title: "Go to Gym",
        description: "Go to gym from 7-9",
        completed: false
      },
      {
        title: "Study DSA",
        description: "From 8-9",
        completed: false
      }]);

      // function  addTodo() {
      //   setTodos([...todos,{
      //     title:"New Task",
      //     description:"jargon"
      //   }])
      // }
  return (
      <div>

        {/* <button onClick={addTodo}>click</button> */}
        <button onClick={() => {  
          setTodos((todos) => [...todos, {
            title:"Adding new",
            description: "lol"
          }
        ]);
        }}>Click</button>
        
        {/* <Todo title={todos[0].title} description = {todos[0].description} />
        <Todo title={todos[1].title} description = {todos[1].description} /> */}

        {todos.map(function(todo)
        {
          return <Todo title = {todo.title} description = {todo.description}/>
        })}
      </div>
  
  )
}

function Todo(props)
{
  return <div>
    <h1>{props.lol}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
