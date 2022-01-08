import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddTodo = ({ addTodo, showAlert }) => {
    const [desc, setDesc] = useState("");
    let history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        if (desc.length < 5) {
            showAlert("danger", "Description's length can not be less than 5 characters");
            history.push('/');
        }
        else {
            addTodo(desc);
            setDesc("");
            showAlert("success", "Todo Added SuccessFully");
        }
    };

    return (
        <form onSubmit={ onSubmit }>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label fs-2 fw-bolder">Add A Todo</label>
                <textarea value={ desc } onChange={ (e) => setDesc(e.target.value) } className="form-control" id="desc" name='desc' rows="5"></textarea>
            </div>
            <button type='submit' className="btn btn-lg btn-success mb-3 mx-2">Add This Todo</button>
            <button type='button' className="btn btn-lg btn-success mb-3 mx-2" onClick={ () => setDesc("") }>Clear The Value</button>
        </form>
    );
};

export default AddTodo;
