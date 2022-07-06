import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import CV from "./CV.pdf"
import { themeContext } from '../../context'
import { useContext } from 'react'
import { motion } from "framer-motion";

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {
            duration: 1,
            type: "spring",
        };

    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span style = {{color: darkMode ? 'white' : ''}}>My Awesome</span>
                <span>services</span>
                <span>
                    I do mainly python programming and React web development.
                    <br />
                    Also I do UI/UX designing, Graphic designing and HTML5 Advertisements designing
                </span>
                <a href={CV} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                >
                    <Card 
                        emoji = {HeartEmoji}
                        heading = {'Design'}
                        details = {"Figma, Sketch, Corel, Adobe XD, Animate"}
                    />
                </motion.div>

                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                >
                    <Card
                        emoji = {Glasses}
                        heading = {'Developer'}
                        details = {"Python, HTML, CSS, JavScript and React"}
                    />
                </motion.div>
                
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <Card
                        emoji = {Humble}
                        heading = {'UI/UX and HTML5 Ads'}
                        details = {"Figma and XD for UI/UX and Animate to create ads"}
                    />
                </motion.div>
                
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

            </div>
        </div>
    )
}

export default Services