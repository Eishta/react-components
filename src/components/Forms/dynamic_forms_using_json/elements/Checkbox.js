import React, { useContext } from 'react'
import { FormContext } from '../FormContext';

const Checkbox = ({ field }) => {
  const { handleChange } = useContext(FormContext);

  let { id, value, label, type } = field
  return (
    <div className='field'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} checked={value} onChange={e => handleChange(id, e)} />
    </div>
  )
}

export default Checkbox