import './createTodoButton.css';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';



export function CreateTodoButton() {

    const { setOpenModal } = useContext(TodoContext);

    return (
        <button className="createButton" onClick={() => setOpenModal(state => !state)}> +</button >
    )
}

