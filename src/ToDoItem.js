import {PiCheckFatFill} from "react-icons/pi";
import {ImCross} from "react-icons/im"
import './ToDoItem.css';


function ToDoItem({text, completed, onComplete, onDelete}) {

    const iconCheked = completed ? 'item-button  item-button-check--active' : `item-button item-button-check`;
    const iconDelete = completed ? 'item-button  item-button-delete-check--active' : `item-button item-button-delete`;

    return(
        <li className={`item-li ${completed && "item-li-completed"}`}>
            <span className='item-span'>
                <div className='item-container-button-check'>
                        <button className={iconCheked}
                        onClick={onComplete}><PiCheckFatFill /> </button>
                </div>
                <p className={`item-p ${completed && "item-p--active"}`}>
                    {text}
                </p>
            </span>
            <span>
                <div className='item-container-button-delete'>
                    <button className={iconDelete} onClick={onDelete}>
                        <ImCross /> 
                    </button>
                </div>
            </span>
        </li>
        );
    }

export {ToDoItem} 