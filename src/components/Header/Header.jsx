import React, { useState } from 'react';
import './Header.css'

const Header = () => {

    // Change Background Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add
        ("scroll-header");
        else header.classList.remove("scroll-header")
    })

    // Toggle Menu
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');

  return (
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className='nav_logo'>Praneet S</a>

            <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                <ul className='nav_list grid'>

                    <li className='nav_item'>
                        <a href='#Home' onClick={() => setActiveNav('#Home')} 
                        className = {activeNav === "#Home" ? "nav_link active-link" : "nav_link"}>
                            <i className='uil uil-estate nav_icon'></i> Home
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#About' onClick={() => setActiveNav('#About')} 
                        className = {activeNav === "#About" ? "nav_link active-link" : "nav_link"}>
                            <i className='uil uil-user nav_icon'></i> About
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#Skills' onClick={() => setActiveNav('#Skills')} 
                        className = {activeNav === "#Skills" ? "nav_link active-link" : "nav_link"}>
                            <i className='uil uil-file-alt nav_icon'></i> Skils
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#Services' onClick={() => setActiveNav('#Services')} 
                        className = {activeNav === "#Services" ? "nav_link active-link" : "nav_link"}>
                            <i className='uil uil-briefcase-alt nav_icon'></i> Services
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#Portfolio' onClick={() => setActiveNav('#Portfolio')} 
                        className = {activeNav === "#Portfolio" ? "nav_link active-link" : "nav_link"}>
                            <i className='uil uil-scenery nav_icon'></i> Portfolio
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#Contact' onClick={() => setActiveNav('#Contact')} 
                        className = {activeNav === "#Contact" ? "nav_link active-link" : "nav_link"}>
                            <i className='uil uil-message nav_icon'></i> Contact
                        </a>
                    </li>

                </ul>

                <i className='uil uil-times nav_close' onClick={() => showMenu(!Toggle)}></i>
            </div>

            {/* Mobile Menu */}
            <div className='nav_toggle' onClick={() => showMenu(!Toggle)}>
                <i className='uil uil-apps'></i>
            </div>

        </nav>
    </header>
  )
}

export default Header