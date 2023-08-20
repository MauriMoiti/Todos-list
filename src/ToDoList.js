import './ToDoList.css'
function ToDoList( {children} ) {
    return (
    <main className='container-main-lt'>
        <section className='section-lt'>
            <ul className='lt-ul'>
                {children}
            </ul>
        </section>
    </main>
    );
}

export {ToDoList};