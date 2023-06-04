import React from 'react'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zoom, Fade } from "react-awesome-reveal";
gsap.registerPlugin(ScrollTrigger)
export const About = () => {
    const aboutTed = useRef(null);

    // useEffect(() => {
    //     const el = aboutTed.current;

    //     gsap.fromTo(el, {opacity : 0}, {opacity : 1, duration: 4, scrollTrigger : {
    //         trigger: el,

    //     }})

    // },[])
    return (
        <div className="about__page">

            <div className="about">

                <div className='row about__blocks'>
                    <div className='col-lg-2 col-md-12 about__ted align-self-end'>
                        <h1 className='vertical-text'><span className="what">Score</span>IT</h1>
                    </div>
                    {/* <div className='col-lg-1'></div> */}
                    <div className='col-lg-3 col-md-6 about__ted'><Fade direction='left' triggerOnce delay={1000}>
                        <h1 className='about_heading'>Uniqueness <span className="clg-name"> </span></h1>
                        <p>Design plays a crucial role in creating a visually appealing and engaging user interface. Participants will be assessed on their ability to craft visually striking designs that effectively communicate the intended message or purpose. The use of color schemes, typography, visual elements, and overall composition will be taken into account to determine the quality of the design. The code quality also carries major weightage during the evaluation.</p></Fade>
                    </div>
                    <div className='col-lg-3 col-md-6 about__ted'><Zoom triggerOnce delay={1000}>
                        <h1 className='about_heading'><span className="clg-name">Responsiveness </span></h1>
                        <p>Responsiveness is an essential aspect of modern web development, as users increasingly access websites and applications on various devices. Participants will be evaluated on their implementation of responsive design principles, ensuring that their creations adapt seamlessly to different screen sizes and resolutions. The judges will assess the fluidity and consistency of the design across multiple devices, providing an optimal user experience.</p></Zoom>
                    </div>
                    <div className='col-lg-3 col-md-12 about__ted'><Fade direction='right' triggerOnce delay={1000}>
                        <h1 className='about_heading'>Adaptiveness<span className="clg-name"></span></h1>
                        <p>The flexibility of customizing data from the backend showcases the participants' technical proficiency and problem-solving skills. The ability to efficiently retrieve and manipulate data from a backend system demonstrates a strong understanding of front-end development concepts. Participants will be evaluated on their implementation of dynamic and interactive elements that allow users to interact with and customize data in a meaningful way.</p></Fade>
                    </div>

                </div>


            </div>


        </div>
    )
}

