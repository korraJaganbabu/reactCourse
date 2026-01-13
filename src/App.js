import './App.css';
import { useState } from 'react';
import Task from './Components/Task';

function App() {

const [todoList, setTodoList] = useState([]);
const [newTask, setNewTask] = useState("");

const addTask = () => {
 const task = {
  id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
  name: newTask,
  isCompleted: false
 }
 setTodoList([...todoList, task]);
}

const handleTask = (event) => {
 setNewTask(event.target.value);
}

const deleteTask = (taskId) => {
 setTodoList(todoList.filter((task) =>task.id!== taskId ));
};

const completeTask = (taskId) => {
 setTodoList(
  todoList.map((task) => {
   if (task.id=== taskId) {
    return {...task, isCompleted: true};
   }
   return task;
  })
 );
}


return (
 <div className="App">
 <div className='addTask'>
 <input onChange={handleTask}/>
 <button onClick={addTask}>Add Task</button>
 </div>
 <div className='list'>
  {todoList.map((task) => {
   return <Task name={task.name} id={task.id} completed = {task.isCompleted} completeTask={completeTask} deleteTask={deleteTask}/>;
  })}
 </div>
 </div>

);

}

export default App;