import React from 'react';
import Todo from '../Components/Todo';

const Home = ({ showAlert }) => {
    return (
        <div className='container'>
            <h1 className='text-center'>iTodo by DarkLordDev</h1>
            <Todo showAlert={ showAlert } />
        </div>
    );
};

export default Home;
