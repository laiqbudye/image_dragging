import React from 'react';

export const Button = ({ btnid, classname, btntext, onClick }) => {
    return (
        <div id={btnid} className={classname} onClick={onClick}>
            {btntext}
        </div>
    )
}
