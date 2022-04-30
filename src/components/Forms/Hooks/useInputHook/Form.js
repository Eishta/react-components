import React from 'react'
import useInput from './useInput';


/**
 * Link: https://www.youtube.com/watch?v=6am-yn3ZLEw
 */

const Form = () => {
    const register = (e) => {
        e.preventDefault();
        console.log(name, age)
        resetAge();
        resetName();
    }
    const [name, handleNameChange, resetName] = useInput('');
    const [age, handleAgeChange, resetAge] = useInput('');
    return (
        <div>
            <form onSubmit={register}>
                <label htmlFor='name'>Name:</label>
                <input id='name' name="name" value={name || ''} onChange={handleNameChange} />

                <label htmlFor='age'>Age:</label>
                <input id='age' name="age" value={age || ''} onChange={handleAgeChange} />

                <input type='submit' />
            </form>

        </div>
    )
}

export default Form


