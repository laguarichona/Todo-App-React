import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

// En mi función context podemos encapsular nuestra lógica de la aplicación que querramos compartir entre varios componentes
const TodoContext = createContext();
// Es un componente por lo tanto puede recibir props
function TodoProvider({ children }) {

    //? Estados
    // Aquí utilizamos el CustomHook que creamos, llamado useLocalStorage
    const {
        itemState: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    // console.log(todos);

    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    //? Estados Derivados

    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter((todo) => {

        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return (todoText.includes(searchText)
        )
    });

    //?--------------------------------------------------

    //? Funciones que Modifican Los estados

    const completeTodo = (i) => {
        const newTodos = [...todos];
        newTodos[i].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (i) => {
        const newTodos = [...todos];
        newTodos.splice(i, 1);
        saveTodos(newTodos);
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}

        </TodoContext.Provider>
        /* todo lo que esté dentro de value es lo que vamos a querer compartir con el componente que estén dentro de este provider y por defectos con sus hijos */
        // De esta manera podemos consumir cada uno de los estados y estados derivados encontrados dentro de value
    );
}

export { TodoContext, TodoProvider };