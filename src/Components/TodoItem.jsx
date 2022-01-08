import React from 'react';

const TodoItem = ({ todo, onDelete, onMarkDone }) => {
    return (
        <div className="col-lg-3">
            <div className="card">
                <div className="card-body">
                    <h5 className={ `card-title ${ !todo.active ? 'strike' : '' }` }>{ todo.desc }</h5>
                    <input className="form-check-input my-2" onClick={ () => onMarkDone(todo) } type="checkbox" id="flexCheckChecked" checked={ !todo.active } onChange={ () => todo.active = !todo.active } />
                    <label className="form-check-label mx-2 my-1" htmlFor="flexCheckChecked" >
                        Mark As Done
                    </label>
                    <button href="#" onClick={ () => onDelete(todo) } className="btn btn-danger container-fluid">Delete This Todo</button>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
