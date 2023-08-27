import React from 'react'
import Menu from './Menu'
import Logo from "../images/logo.png"
import { FiMenu } from "react-icons/fi"
import { icon } from "../script/event"

export default function Header() {

  return (
    <div className='header'>
        <div className='header_section'>
            <div className='logo'>
              <a href='routmenu'>
                <img alt='FullClean' src={Logo}/>
              </a>
            </div>

            <div className='menu'>
                <div className='icon_logo'  onClick={icon}>
                  <FiMenu/>
                </div>
            
                <div className='header_menu'>
                    <Menu/>
                </div>
            </div>
        </div>
    </div>
  )
}
