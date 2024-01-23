import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo,setTodo] = useState([
    {
      title: "one",
      desc: "ok",
      id : "1"
    }
  ])


  return (
      <div>
        <input id='title' placeholder='Enter Title'></input><br></br>
        <input id='desc' placeholder='Enter Description'></input><br></br><br></br>
        <button onClick={
          ()=>{
            setTodo(
              (todos) => [...todos,
              {
                title : "two",
                desc : "ok",
                id : "2"
              }]);
          }} >Add Item</button>

        {todo.map((props) => 
        {
          return <TodoStructure title={props.title} desc = {props.desc} id = {props.id}/>
        } )}
      </div>
  )
}

function TodoStructure(props)
{
  const [butn, SetButton] = useState(false)

    
  function MarkAsDone(butn)
  {
    if(butn === false)
    {
      console.log("Done H jii")
      SetButton(true)
    }
  } 

  return (
      <div>
        {console.log("prop " + props.id)}
        <h2><b>Ttile: {props.title}</b></h2>
        <h2><b>Description: {props.desc}</b></h2>
        <button id = {props.id} onClick={MarkAsDone(butn)}>Mark As Done</button>
        <button>Delete</button>
      </div>
  )
}


export default App
