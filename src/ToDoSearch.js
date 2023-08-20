import React from 'react';
import './ToDoSearch.css';


function ToDoSearch(
    {searchValue,setSearchValue}
) {

    return (
        <div className="container-td-search"> 
            <input 
                placeholder="Comprar Pan" 
                className="td-search"
                value={searchValue}
                onChange={
                    (event) => {
                        console.log('Escribiste en el ToDoSearch')
                        console.log(event.target.value)
                        setSearchValue(event.target.value)
                    }
                }
            />
        </div>
    );
}

export {ToDoSearch};