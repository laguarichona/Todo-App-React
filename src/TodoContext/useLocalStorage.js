import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {

    //Estados - Acualizarlos e Irlos Retornando en donde lo veamos conveniente
    const [itemState, setItemState] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {


        setTimeout(() => {
            try {//Entrada de Datos al localStorage; y del LocalStorage al estado
                const localStorageItem = localStorage.getItem(itemName);
                console.log(localStorageItem);

                let parsedItem;
                // Con esta condicional vamos a llenar la variable parsedTodos
                if (!localStorageItem) {
                    // Aquí asignas de forma independiente un array vacío "[]" al local storage y a la variante "parsedItem"
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;

                } else {
                    // Aquí se pasa la información a javaScript
                    parsedItem = (JSON.parse(localStorageItem));
                    setItemState(parsedItem);
                }
                setLoading(false);
            }
            catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    }, []);


    // No se utiliza setItemState para la entrada de datos desde localStorage porque se estaría creando un bucle infinito, ya que se estaría llamando a la función que se encarga de actualizar el estado, y esta función se encarga de llamar a la función que se encarga de actualizar el estado, y así sucesivamente.



    //? Función Actualizadora. Encargada de actualizar el estado de los Item (TODOS, datos) ya existente en la aplicación. Actualiza el Estado y el LocalStorage

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItemState(newItem);
    };

    // No estamos exportando o returnando tal cual el actualizador del estado, sino la nueva función que se llama saveItem, que también se conecta a localStorage.
    //* console.log(item);

    return {
        itemState,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Usar Calcetines', completed: true },
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');