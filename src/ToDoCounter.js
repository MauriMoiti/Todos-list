import './ToDoCounter.css';

function ToDoCounter({ completed, total, allTodosCompleted }) {
    const spanClass = allTodosCompleted ? 'span-completed' : '';

    return (
        <h1 className='counter-title'>
            {allTodosCompleted 
                ? "¡Felicitaciones! Tienes " 
                : "Has completado "
            }
            <span className={spanClass}>{completed}</span> de 
            <span className={spanClass}> {total}</span> ToDo 
            {allTodosCompleted && " Completados"}
        </h1>
    );
}

export { ToDoCounter };

    // ${completed && "item-p--active"