import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {
    //Events to modify state/pass from home to TodoList to Todo
    //Can only pass props downwards from home to components
    
    return (
        <div className="todo">
            {/* ternary if true add class to it, if not add nothing */}
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}
            <div className="buttons">
                <button onClick={completeHandler} className="complete-btn anything"><i className="fas fa-check"></i></button>
                <button onClick={deleteHandler} className="trash-btn anything"><i className="fas fa-trash"></i></button>
            </div></li>
            {/* <div className="buttons">
                <button onClick={completeHandler} className="complete-btn anything"><i className="fas fa-check"></i></button>
                <button onClick={deleteHandler} className="trash-btn anything"><i className="fas fa-trash"></i></button>
            </div> */}
        </div>
    );
}

export default Todo;