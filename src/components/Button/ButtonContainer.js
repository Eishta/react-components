import React from 'react';
import './style.css';
import Button from './Button';

const ButtonContainer = () => {
  return (
    <div className='bttn btn-container'>
        <Button className="primary" label="Primary" onClick={()=> alert('Hi, I am Primary')}/>
        <Button className="secondary" label="Secondary" onClick={()=> alert('Hi, I am Secondary')}>Secondary</Button>
        <Button variant="outlined" size="small" onClick={()=> alert('Hi, I am Other Button')}></Button>
        
    </div>
  )
}

export default ButtonContainer