import React, { useContext } from 'react'
import { FormContext } from '../FormContext';

const Input = ({ field }) => {
    const { handleChange } = useContext(FormContext);

    let { id, type, placeholder, label, helptext, required = false } = field;
    return (
        <div className='field'>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                required={required}
                onChange={(e) => handleChange(id, e)}
            />

            {helptext && <div className='help-text'> {helptext}</div>}
        </div>
    )
}

export default Input