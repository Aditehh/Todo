import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = () => {
    let index = todos.findIndex(item => {
      return item.id === id;
      console.log(index)
      let newTodos =
        newtodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos, todos)
    })
  }

  const handleDelete = (e, id) => {
    console.log(`the id is ${id}`)
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo(" ")
    console.log(todos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = () => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }


  return (
    <>
      <Navbar />
      <div className='mx-20 my-7 bg-gray-300 p-3  rounded-2xl items-center min-h-[80vh]'>
        <div className="addTodo">
          <h2 className='text-lg font-bold my-5'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} className='w-1/2 border-black h-9 rounded-2xl bg-amber-50' type="text" />
          <button onClick={handleAdd} className='bg-gray-500 hover:bg-gray-700 cursor-pointer px-3 font-bold mx-8 py-1.5 rounded-xl text-white'>Add</button>
        </div>

        <h2 className='text-lg font-bold my-2'>Any todos?</h2>
        <div className="todos">
          {todos.map(item => {


            return <div key={item.id} className="todo flex justify-between w-1/2 my-2 items-center">
              <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              <div className="buttons my-2 ">
                <button onClick={handleEdit} className='bg-gray-500 hover:bg-gray-700 cursor-pointer px-3 font-semibold mx-1 py-1.5 rounded-xl text-gray-300'>Edit</button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-gray-500 hover:bg-gray-700 cursor-pointer px-3 font-semibold mx-1 py-1.5 rounded-xl text-gray-300'>Delete</button>
              </div>
            </div>
          })}
        </div>

      </div>
    </>
  )
}

export default App
