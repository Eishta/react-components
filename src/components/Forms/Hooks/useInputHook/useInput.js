import React, { useState } from 'react'

// any input field has a value , a handler for onChange
// additional => resetState
const useInput = (initialState) => {
    const [state, setState] = useState(initialState);
    const handleChange = (e) => {
        setState(e.target.value)
    }
    const resetState = () => {
        setState('')
    }

    return [state, handleChange, resetState];
}

export default useInput