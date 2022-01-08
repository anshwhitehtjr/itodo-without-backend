import React from 'react';

const Alert = ({ alert }) => {
    return (
        <div style={ { height: '60px' } }>
            {
                alert
                && <div style={ { height: '60px' } } className={ `alert alert-${ alert.type } alert-dismissible fade show` } role="alert">
                    <strong>{ alert.msg }</strong>
                </div>
            }
        </div>
    );
};

export default Alert;
