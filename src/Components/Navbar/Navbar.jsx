import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from "react-scroll";

export const Navbar = () => {
    return (
        <div className="n_wrapper">
            <div className="n-left">
                <div className="n-name">~AkD~</div>
                <span><Toggle/></span>
            </div>

            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <li>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="works" spy={true} smooth={true}>
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="portfolio" spy={true} smooth={true}>
                                Protfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="testimnial" spy={true} smooth={true}>
                                Testimonial
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to="contact" smooth={true} spy={true}>
                    <button className="button i-button">Hire me</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
