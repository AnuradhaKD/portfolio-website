 import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import FB from '@iconscout/react-unicons/icons/uil-facebook'
import GH from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className="f-content">
          <span>d.m.a.k.dissanayake.1997@gmail.com</span>
          <div className="f-icons">
            <Insta color='white' size='3rem'/>
            <FB color='white' size='3rem'/>
            <GH color='white' size='3rem'/>
          </div>

        </div>
    </div>
  )
}

export default Footer