import React from 'react'
import Accordian from './Accordian'

const AccordianList = ({ data }) => {
  console.log('hi')
  return (<div className='acc-list'>
    {data.map((ele, index) => <Accordian key={`${ele.label}-${index}`} accInfo={ele} />)}
  </div>

  )
}

export default AccordianList