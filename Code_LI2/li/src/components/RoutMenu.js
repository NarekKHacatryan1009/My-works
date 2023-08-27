import React from 'react'
import PriceList from './PriceList'
import AboutUs from './AboutUs'
import Contact from './Contact'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePages from './HomePages'
import Info from './Info'
import Footer from './Footer'

export default function RoutMenu() {
  return (
    <BrowserRouter>
        <div className='container_fluid rout_menu' id="routmenu">
          <HomePages/>
            <Routes>

                <Route path='priceList' Component={PriceList}/>
                <Route path='contact' Component={Contact}/>
                <Route path='aboutUs' Component={AboutUs}/>

            </Routes>
          
        </div>
        <hr style={{width:"80%", margin:"auto"}}/>
        <Info/>
        <Footer/>
    </BrowserRouter>
  )
}
