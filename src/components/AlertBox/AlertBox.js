import React from 'react'

const AlertBox = ({ type, message, children, isOpen, handleToggle }) => {
    return (
        <div className={`alert-box ${type} ${isOpen ? 'open' : ''}`}>
            {message}
            {children}

            <span className='close-alert' onClick={() => handleToggle(false)}>X</span>
        </div>
    )
}

export default AlertBox;