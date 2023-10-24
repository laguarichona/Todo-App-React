import { useContext } from 'react';
import './todoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter({ }) {

    const {totalTodos: total, completedTodos: completed} = useContext(TodoContext);

    return (
        <h1 className="TodoCounter">
            Has completado <span>{completed}</span> de <span>{total}</span> TODOS
        </h1>
    );
}

export { TodoCounter };