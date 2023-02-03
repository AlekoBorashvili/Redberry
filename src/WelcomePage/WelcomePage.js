import React, { Fragment } from 'react'
import './WelcomePage.css'
import bg from '../assets/bg.png'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'

function WelcomePage() {
  return (
    <Fragment>
        <img className="main_img" src={bg}alt="image"/>
        <header>
            <img className="header_img" src={logo1} alt="image"/>
            <div className="line"></div>
        </header>
        <img className="secondary_img" src={logo2} alt="image"/>
        <div className="btn">
            <button className="main_btn">რეზიუმეს დამატება</button>
        </div>
    </Fragment>
  )
}

export default WelcomePage