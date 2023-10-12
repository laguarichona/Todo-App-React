import './LoadingStateTodos.css';


const LoadingStateTodos = () => {
    return (

        // < p > Holaaa Cargando...</p >
        <div className="loadingTodoItem">

            <p className="loadingTodoText"></p>

            {/* <span className="loadingTodoDeleteIcon"></span> */}
        </div>
    );
};

export { LoadingStateTodos };
