import React from 'react'
import Accordian from './Accordian'

const AccordianList = ({ data }) => {
  return (<div className='acc-list'>
    {data.map((ele, index) => <Accordian key={`${ele.label}-${index}`} accInfo={ele} />)}
  </div>
  )
}

export default AccordianList