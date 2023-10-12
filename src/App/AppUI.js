import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../todoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { EmptyStateTodos } from '../EmptyStateTodos';
import { LoadingStateTodos } from '../LoadingStateTodos';
import { ErrorStateTodos } from '../ErrorStateTodos';
import { TodoContext } from '../TodoContext';


// Acuerdate al enviar props tienes que desestructurar al recibir
const AppUI = (
    // {
    // loading,
    // error,
    // totalTodos,
    // completedTodos,
    // searchValue,
    // setSearchValue,
    // searchedTodos,
    // completeTodo,
    // deleteTodo, 
    // }
) => {

    return (
        <>

            <TodoSearch />

            {/* Encapsulas el componente dentro de mi componente principal, en caso de crear dos componentes en un mismo archivo */}

            <TodoContext.Consumer>
                {({ loading,
                    error,
                    searchedTodos,
                    completeTodo,
                    deleteTodo, }) =>
                (<TodoList>
                    {loading && (
                        <>
                            <LoadingStateTodos />
                            <LoadingStateTodos />
                            <LoadingStateTodos />
                            <LoadingStateTodos />
                        </>
                    )

                    }
                    {error && <ErrorStateTodos />}
                    {(!loading && searchedTodos.length === 0) && <EmptyStateTodos />}

                    {searchedTodos.map((todo, i) => (
                        // Misu es el componente que va a renderizar cada Item

                        <TodoItem
                            key={i}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(i)}
                            onDelete={() => deleteTodo(i)}
                        />
                    ))}

                    {/* No pasax nada si iteramos sobre un array vacío, lo importante es tener algo sobre la cual iteremos */}
                </TodoList>
                )}

            </TodoContext.Consumer>

            <TodoCounter />


            <CreateTodoButton />
        </>
    )
}

export { AppUI };


