import React from 'react'
import useForm from './useForm';


/**
 * Link: https://www.youtube.com/watch?v=VbUmKm6gjtc
 */

const Form = () => {
    const register = (e) => {
        e.preventDefault();

    }
    const [values, resetValues, submitForm, handleChange] = useForm(register);
    console.log(handleChange)
    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor='name'>Name:</label>
                <input id='name' name="name" value={values.name || ''} onChange={handleChange} />

                <label htmlFor='age'>Age:</label>
                <input id='age' name="age" value={values.age || ''} onChange={handleChange} />

                <input type='submit'/>
            </form>

        </div>
    )
}

export default Form