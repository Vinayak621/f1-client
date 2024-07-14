import React from 'react'
import './header.css'
import foneImge from '../../assets/f1.png'
import { Link } from 'react-router-dom';
const header = () => {
  return (
    <div className='header'>
       <Link to="/"> <img src={foneImge} alt="formulaOne" /></Link>
      F1 DATA DASHBOARD
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <a href="" className='headerRightContent'>Driver Standings</a>
        <a href="" className='headerRightContent'>Driver Standings</a>
        <a href="" className='headerRightContent'>Driver Standings</a>
        <a href="/results" className='headerRightContent'>Previous Race Rseults</a>
      </div>
    </div>
  )
}

export default header
