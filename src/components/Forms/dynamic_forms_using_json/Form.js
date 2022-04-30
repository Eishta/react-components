import React, { useEffect, useState } from 'react';
import formJson from './formTemplate.json';
import Element from './Element';
import './style.css';
import { FormContext } from './FormContext';

const Form = () => {
    const [elements, setElements] = useState({});
    useEffect(() => {
        setElements(formJson);
    }, []);

    const handleChange = (id, ev) => {
        const newelements  = {...elements};
        newelements.fields.map(field=> {
            if(field.id === id){
                field.value = ev.target.value; 
            }
        })
        setElements(newelements)
        console.log('handleChange')
    }
    const handleSubmit= () => {
        console.log(elements)
    }
    return (
        <FormContext.Provider value={{handleChange, handleSubmit}}>
        <div className='container'>
            <h1>{elements?.title}</h1>
            <div className='fields-container'>
                {elements && elements.fields && elements.fields.map((ele, i)=><Element key={i} field={ele}/>)}
            </div>
        </div>
        </FormContext.Provider>
    )
}

export default Form