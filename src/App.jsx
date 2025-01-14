import { useState }  from 'react';
import './App.css';
import TodoTable from './TodoTable';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({desc: '', date: ''});
  }
  const clearTodo = ()=> {
    setTodos([]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  return (
    <div className="App">
      <h3>My Todolist</h3>
      <input type="text" placeholder="Date" name="date" value={todo.date} onChange={inputChanged}/>
      <input type="text" placeholder="Description" name="desc" value={todo.desc} onChange={inputChanged}/>
      <button name='add' onClick={addTodo}>Add</button>
      <button name='clear' onClick={clearTodo}>Clear</button>
      <TodoTable todos={todos} />
    </div>
  );
}

export default App;
