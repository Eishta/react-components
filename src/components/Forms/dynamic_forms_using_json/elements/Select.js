import React, { useContext } from 'react'
import { FormContext } from '../FormContext';

const Select = ({ field }) => {
    const { handleChange } = useContext(FormContext);

    let {
        id, label, options, value
    } = field;
    return (
        <div className='field'>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={id} selected={value} onChange={e => handleChange(id, e)}>

                {options && options.map(option => <option value={option.value} key={option.value}>{option.label}</option>)}

            </select>
        </div>
    )
}

export default Select