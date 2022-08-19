import React from 'react'
import AccordianList from './AccordianList';
import './style.css'

let data = [{
  label: 'Accordian 1',
  content: 'Accordian 1',
},
{
  label: 'Accordian 2',
  content: 'Accordian 2',
},
{
  label: 'Accordian 3',
  content: 'Accordian 3',
},
{
  label: 'Accordian 4',
  content: 'Accordian 4',
}]

const AccordianComp = () => {
  return <AccordianList data={data} />

}

export default AccordianComp