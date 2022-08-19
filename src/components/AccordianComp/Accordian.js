import React, { useState } from 'react'

const Accordian = ({ accInfo }) => {
    let { label, content } = accInfo;
    let [isOpen, toggelAcc] = useState(false);
    return (
        <div className={isOpen ? 'open acc-item' : 'acc-item'}>
            <span className='acc-label' onClick={() => toggelAcc(!isOpen)}>
                {label}
            </span>
            <div className="acc-content">
                {content}
            </div>
        </div>
    )
}

export default Accordian;