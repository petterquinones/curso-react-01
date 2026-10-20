import React from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import './App.css'

const defaultTodos = [
  { texto: 'Pato', completed: false },
  { texto: 'Perro', completed: true },
  { texto: 'Caballo', completed: false },
  { texto: 'Gato', completed: false },
  { texto: 'Liebre', completed: false },
]

function App() {

  const [toDos, setToDos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');


  const completedTodos = toDos.filter(
    todo => !!todo.completed).length;

  const totalTodos = toDos.length;

  const searchedTodos = toDos.filter(
    (todo) => {
      const todoText = todo.texto.toLowerCase();
      const searchText = searchValue.toLowerCase() 
      return todoText.includes(searchText)
    }
  );

  const toDoCompleted = (text) => {
    const newToDos = [...toDos]
    const toDoIndex = newToDos.findIndex((todo) => todo.texto === text)
    newToDos[toDoIndex].completed = true;
    setToDos(newToDos)
  }

  const toDoDelete = (text) => {
    const newToDos = [...toDos]
    const toDoIndex = newToDos.findIndex((todo) => todo.texto === text)
    newToDos.splice(toDoIndex, 1);
    setToDos(newToDos)
  }

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.texto}
            texto={todo.texto}
            completed={todo.completed}
            onComplete={() => toDoCompleted(todo.texto)}
            onDelete={() => toDoDelete(todo.texto)}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}
export default App;