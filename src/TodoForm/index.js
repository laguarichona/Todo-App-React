import './TodoForm.css';
import { TodoContext } from '../TodoContext';
import { useContext, useState } from 'react';

export const TodoForm = () => {

    const {
        addTodo,
        setOpenModal } = useContext(TodoContext);

    // Estado local, el cuál manejará el cambio de estado del texarea
    const [newTodoValue, setNewTodoValue] = useState('');

    // La función onSubmit controla los eventos del botón Añadir
    // Llamo al addTodo y le envío esa nueva tarea pendiente 
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    // La función onCancel controla los eventos del botón Cacelar
    const onCancel = (event) => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form className="contenedorForm"
            onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder=" Tarea 👉"
                value={newTodoValue}
                onChange={onChange}
            />

            <div className="btn-container">
                <button
                    type="submit"
                    className="btn-Todo btn-add">
                    Añadir
                </button>
                <button
                    type='button'
                    onClick={onCancel}
                    className="btn-Todo btn-cancel">
                    Cancelar
                </button>
            </div>

        </form>
    )
}

{/* Se coloca textarea para que al momento que el usuario escriba la información, baje de linea */ }

