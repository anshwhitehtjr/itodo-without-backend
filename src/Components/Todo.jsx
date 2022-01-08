import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const Todo = ({ showAlert }) => {
    let initTodo = [];
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const [todos, setTodos] = useState(initTodo);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // Deleting a Todo
    const handleDelete = todo => {
        setTodos(todos.filter(e => { return e !== todo; }));
        showAlert("success", "Todo deleted successfully!!!");
    };

    // Adding a Todo
    const addTodo = desc => {
        let id;
        if (todos.length === 0) {
            id = 0;
        }
        else {
            id = todos[todos.length - 1].id + 1;
        }

        const addedTodo = {
            id: id,
            desc: desc,
            active: true,
        };
        setTodos([...todos, addedTodo]);
        showAlert("success", "Todo Added successfully");
    };

    function getIndex (arr, val) {
        return arr.findIndex(obj => obj === val);
    }
    const onMarkDone = todo => {
        let i = todos.findIndex(e => e === todo);
        let newArr = [...todos];
        let active = { ...newArr[i] };
        active.active = !active.active;
        newArr[i] = active;
        setTodos(newArr);
        showAlert("success", "Todo Done");
    };

    return (
        <>
            <AddTodo addTodo={ addTodo } />
            <h2>Your Todos</h2>
            <div className="row">
                {
                    todos.map(todo => {
                        return <TodoItem key={ todo.id } onMarkDone={ onMarkDone } onDelete={ handleDelete } todo={ todo } />;
                    })
                }
            </div>
        </>
    );
};

export default Todo;
