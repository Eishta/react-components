import React, { useContext } from 'react';
import Input from './elements/Input';
import Select from './elements/Select';
import Checkbox from './elements/Checkbox';
import { FormContext } from './FormContext';


const Element = ({ field }) => {
    const { handleChange } = useContext(FormContext);
    // console.log( handleChange)
    const renderElement = (field) => {
        switch (field.type) {
            case 'text':
                return <Input field={field} handleChange={handleChange} />
            case 'select':
                return <Select field={field} handleChange={handleChange} />
            case 'checkbox':
                return <Checkbox field={field} handleChange={handleChange} />
            default:
                return <Input field={field} handleChange={handleChange} />;
        }
    }
    return (
        <div className='field'>
            {renderElement(field)}
        </div>
    )
}

export default Element