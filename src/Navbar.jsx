import React from 'react'
import "./global.css"
import Logo from './Logo'
import Menu from './Menu'

const Navbar=()=>{
    return(
        <section className='border'>
        <div id='nav'>
        <Logo/>
        <Menu/>
        </div>
        </section>
    )
}
export default Navbar