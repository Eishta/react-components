import React, { useState } from 'react';
import AlertBox from './AlertBox';
import './style.css'
let btnData = [{
    type: 'success',
    text: 'Success',
    message: 'It is success message',
    className: 'success',
    children: null
},
{
    type: 'failure',
    text: 'Failure',
    message: 'It is failure message',
    className: 'failure',
    children: null
},
{
    type: 'primary',
    message: '',
    text: 'Primary',
    className: 'primary',
    children: <p>Primary message</p>
},
{
    type: 'secondary',
    message: '',
    text: 'Secondary',
    className: 'secondary',
    children: <p>Secondary message</p>
}]
const AlertContainer = () => {
    let [isOpenSuc, toggleSucAlert] = useState(false);
    let [isOpenFail, toggleFailAlert] = useState(false);
    let [isOpenPrim, togglePrimAlert] = useState(false);
    let [isOpenSec, toggleSecAlert] = useState(false);

    const handleToggle = (type) => {
        switch (type) {
            case 'success': { toggleSucAlert(prev => !prev); break; }
            case 'failure': { toggleFailAlert(prev => !prev); break; }
            case 'primary': { togglePrimAlert(prev => !prev); break; }
            case 'secondary': { toggleSecAlert(prev => !prev); break; }
        }
    }
    return (
        <div className='alert-conatiner'>
            <div className='btn-container'>
                {btnData.map((btn, index) => <button
                    key={`${index}-${btn.type}`}
                    className={`btn ${btn.className}`}
                    onClick={() => handleToggle(btn.type)}>{btn.type}</button>)}
            </div>
            <AlertBox type="success" handleToggle={toggleSucAlert} message="I am Success" isOpen={isOpenSuc} />
            <AlertBox type="failure" handleToggle={toggleFailAlert} message="I am Failure Message" isOpen={isOpenFail} />
            <AlertBox type="primary" handleToggle={togglePrimAlert} isOpen={isOpenPrim} ><p>I am primary message</p></AlertBox>
            <AlertBox type="secondary" handleToggle={toggleSecAlert} isOpen={isOpenSec} > I am Secondary message</AlertBox>
        </div>
    )
}

export default AlertContainer