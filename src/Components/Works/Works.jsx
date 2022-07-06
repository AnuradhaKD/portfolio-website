import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import {themeContext} from '../../context'
import {useContext} from 'react'
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
    return (
        <div className="works" id="works">
            <div className="w-left">
                <div className="awesome">
                        <span style = {{color: darkMode ? 'white' : ''}}>Works for All these</span>
                        <span>Brands & Clients</span>
                        <span>
                            Python programming
                            <br />
                            React web development.
                            <br />
                            UI/UX designing
                            <br />
                            Graphic designing
                            <br />
                            HTML5 Advertisements designing
                        </span>
                        <Link to="contact" smooth={true} spy={true}>
                            <button className="button s-button">Hire Me</button>
                        </Link>
                        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
                    </div>
                </div>

                <div className="w-right">
                    <motion.div
                        initial={{ rotate: 275 }}
                        whileInView={{ rotate: 0 }}
                        viewport={{ margin: "-40px" }}
                        transition={{ duration: 6.5, type: "spring" }}
                        className="w-mainCircle"
                    >
                        <div className="w-secCircle">
                            <img src={Upwork} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Fiverr} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Amazon} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Shopify} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Facebook} alt="" />
                        </div>
                    </motion.div>
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
                </div>
        </div>
    );
}

export default Works;