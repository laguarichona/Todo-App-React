import React from 'react'
import './todoList.css'

function TodoList(props) {
    return (

        // Otra manera de recibir es sin desestructurar

        <ul className='TodoList'>
            {props.children}
        </ul>

    )
}

export { TodoList };