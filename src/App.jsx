import './App.css'
import ToDoList from '../components/ToDoList'
import AddToDo from "../components/AddToDo.jsx"
import { useState } from 'react';
import WeatherWidget from '../components/Weather';
import NewsFeed from '../components/News';
import Currency from '../components/Currency';
import Calendar from 'react-calendar';



function App() {
  const [toDos, setToDos] = useState([]);
  
  const createToDo = text => {
    let newToDo = { id: crypto.randomUUID(), text: text };
    setToDos( [...toDos,newToDo] );
  };
  
  const deleteToDo = (delId) => {
    const updateToDos = [...toDos];
    let filteredToDoes = updateToDos.filter(toDo => toDo.id !== delId);
    setToDos(filteredToDoes);
  };
  
  return (
    <div className='container'>
      <div className='todo'>
        <AddToDo createToDo= { createToDo }/>
        <ToDoList toDos= { toDos } deleteToDo= { deleteToDo } />
      </div>
      <WeatherWidget />
      <Currency />
      <div className='calendar'>
        <Calendar />
        <NewsFeed />
      </div>
      
    </div>
  );
};

export default App
