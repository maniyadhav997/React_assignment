
import './App.css';
import {useState} from 'react'


function App() {
  const [tasks,setTask]=useState([])
  const [newItemText, setNewItemText] = useState('');

  

  const handleInputChange = (event) => {
    setNewItemText(event.target.value);
  };

  const handleAddItem = (event) => {
    event.preventDefault()
    if (newItemText.trim() !== '') {
      setTask([...tasks, newItemText]);
      setNewItemText('');
    }
  };
  const removeTask = (indexToRemove) => {
    setTask(tasks.filter((_,index) => index !== indexToRemove))
  }
  return (
    <div className="App">
      <h1 className='heading'>Task Manager</h1>
      <form onClick={handleAddItem}>
            <input value={newItemText}  type='text'  onChange={handleInputChange} placeholder='enter task'/>
            <button type='submit' className='button' >Add task</button>     
      </form>
      <ul className='task-container'>
              {
                tasks.map((item,index)=>(
                  <li className='task' key={index}>
                    <button type='button'  className='progress'>complete</button>
                    <p className="task">{item}</p>
                    <button  className='remove' type='button' onClick={()=> removeTask(index)}>remove</button>
                  </li>
                ))
              }
            </ul>
      
    </div>
  );
}

export default App;
