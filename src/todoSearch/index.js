import { useContext } from 'react'
import './todoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {

    const { searchValue, setSearchValue } = useContext(TodoContext);

    return (

        <input
            className='TodoSearch'
            placeholder="Cortar Cebolla"
            // Predefino el valor inicial como el valor del estado
            value={searchValue}
            // Escucho el evento
            onChange={(event) => {
                console.log(event.target.value);
                setSearchValue(event.target.value)
            }
            }
        />

    )
}

export { TodoSearch };
