import './CreateToDoButton.css'

function CreateToDoButton() {
    return(
        <div className='container-create-td-button'>
            <button className='create-td-button' onClick={
                () => {
                    console.log('Click')
                }
            }>New To-Do</button>
        </div>
    );
} 
export { CreateToDoButton }