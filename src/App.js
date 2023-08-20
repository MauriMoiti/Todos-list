import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton'

const defaultToDos = [
  {text: 'Curso de inglés', completed: false},
  {text: 'Ejercicios FreeCodeCamp', completed: true},
  {text: 'Comprar pan', completed: false},
  {text: 'Mirar el segundo capitulo de la serie', completed: false},
  {text: 'Testeando Code', completed: true},
  {text: 'Pagar la tarjeta de credito', completed: false},
  {text: 'Llamar al plomero', completed: false},
  {text: 'Mirar el segundo capitulo de la serie', completed: false}
]

/* generador de id */
const isValidId = (id) => /^[1-9][0-9]{0,2}$/.test(id);
const generatedRandomId = () => Math.floor(Math.random() * 999) + 1;
const idMapping = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (!isValidId(array[i].id)) {
      array[i].id = generatedRandomId();
    }
  }
  return array
}
const arrayToDoId = idMapping(defaultToDos) // arrayToDoId, pasa a tener los valores de defaultTodos, donde cada elemento tiene su propia ID. 

//  Local Storage
const LOCAL_STORAGE_KEY = 'TODOS_V1'; // almacenamos la key de la unidad de información, de nuestro Local Storage.  


function App() {
  
  const [todos, setTodos] = React.useState(() => {
    const localStorageTodos = window.localStorage.getItem(LOCAL_STORAGE_KEY)

    if (localStorageTodos) {
      return JSON.parse(localStorageTodos);
    } 
    /*
    Este bloque if se ejecuta únicamente si localStorageTodos tiene un valor (es decir, si se encontró algo en el localStorage bajo la clave LOCAL_STORAGE_KEY). Si localStorageTodos es null o undefined (es decir, no se encontró ningún valor), el bloque if se saltará y el código seguirá con las siguientes líneas.
    */
  
    // Si no hay nada en localStorage, guarda y utiliza los valores predeterminados
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arrayToDoId));
    return arrayToDoId;
  })
  const [searchValue, setSearchValue] = React.useState('');

  // 
  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}, [todos]);
const saveTodos = (newTodos) => {
  setTodos(newTodos);
}

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    }
  )

  const completeTodo = (id) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  const allTodosCompleted = (completedTodos === totalTodos) && (totalTodos !== 0)  

  console.log('Este es el nuevo valor del Estado ' + searchValue)
  return (

    <>
      <ToDoCounter completed={completedTodos} total={totalTodos} allTodosCompleted={allTodosCompleted}/>
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <ToDoList>
        {searchedTodos.map(todo => (
          <ToDoItem 
            text={todo.text} 
            completed={todo.completed} 
            key={todo.id}
            onComplete={
              () => {
                completeTodo(todo.id)
              }
            }
            onDelete={() => deleteTodo(todo.id)}
          />
        ) )}
      </ToDoList>

      <CreateToDoButton />
    </>
  );
}

export default App;