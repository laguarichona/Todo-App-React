import { useContext } from 'react'
import './todoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {

    const onSubmit = (event) => {
        event.preventDefault();

    }

    // No vamos a recibir las propiedades a través de props, sino mediante useContext
    const { searchValue, setSearchValue } = useContext(TodoContext);

    return (

        <input onSubmit={onSubmit}
            className='TodoSearch'
            placeholder="Cortar Cebolla"
            // Predefino el valor inicial como el valor del estado
            value={searchValue}
            // Escucho el evento
            onChange={(event) => {
                // console.log(event.target.value);
                setSearchValue(event.target.value)
            }
            }
        />

    )
}

export { TodoSearch };
