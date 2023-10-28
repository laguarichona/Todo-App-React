import './TodoForm.css';

export const TodoForm = () => {
    return (
        <form className="contenedorForm">
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Comenzar curso de inglés" />

            <div className="btn-container">
                <button
                    className="btn-Todo btn-add">Aceptar</button>
                <button
                    className="btn-Todo btn-cancel">Cancelar</button></div>

        </form>
    )
}

{/* Se coloca textarea para que al momento que el usuario escriba la información, baje de linea */ }

