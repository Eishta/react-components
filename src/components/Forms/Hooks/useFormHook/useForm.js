import React, {useState} from 'react'

const useForm = (submitHandler) => {
    const [state, setState]= useState({});

    const submitForm = ()=> {
        submitHandler();
    }
    const resetState = ()=>{
        setState({})
    }

    const handleChange = (e) => {
        setState(state=> ({...state, [e.target.name]: e.target.value}))
    }


  return [state, resetState, submitForm, handleChange];
}

export default useForm