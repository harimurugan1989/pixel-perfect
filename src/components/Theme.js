import React from 'react'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import TypeWriterEffect from 'react-typewriter-effect';
import { Zoom } from 'react-awesome-reveal';
gsap.registerPlugin(ScrollTrigger);

export const Theme = () => {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
  const container = useRef(null);
  const themeText = useRef(null);
  const ted = <h5 className='makeitred'>TED</h5>;
  const reverberate = `REVERBERA`
  console.log(ted)
  // useEffect(() => {
  //   const el = themeText.current;
  //   gsap.fromTo(el, { x: 500 }, {
  //     x: 0, duration: 2, scrollTrigger: {
  //       trigger: el,

  //       // scrub: true,
  //     }
  //   })
  // }, [])
  // useEffect(()=>{
  //   Lottie.loadAnimation({
  //     container: container.current,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     // animationData: require("https://assets9.lottiefiles.com/packages/lf20_43vMqxYiFk.json")
  //     path: "https://assets9.lottiefiles.com/packages/lf20_43vMqxYiFk.json"
  //   })

  // },[])
  return (
    <div className='theme__page'>
      {/* <div className='theme__heading'>
        <h1>REVERBERATED 2023</h1>
      </div> */}
      <div class="row">
        
      <div className='col-lg-2 col-md-12 about__ted align-self-end'>
                        <h1 className='vertical-text'><span className="what">Sign</span>UP</h1>
                    </div>
                    


        <div className='col-lg-4 col-md-6 about__ted'>
                        <Fade direction='left' triggerOnce delay={500}>
                
              <h1 className='about_heading'>Registration<span className="white-text">Details</span></h1>
                <ul>
                  <li>Registration Fee: Rs. 150 per team</li>
                  <li>Team can have maximum of three members (one team leader and two other members)</li>
                  <li> Front end technology : React.js</li>
                  <li>Back end technology :  Node.js</li>
                  <li>Mongodb</li>
                  <li>Figma knowledge will be an added advantage</li>
                  </ul>
                  <button className="button2 redback" onClick={() => { window.location.href = 'https://docs.google.com/document/d/1BjM7Zdo_nxm7IrXwp_yXO-xCw_Ln7HI2EC5TErOz2DY/edit?usp=sharing'; }} id="myButton" target="_blank"><span>Detailed Problem Statement</span></button>
                   </Fade>
          {/* <div className='heading__mobile2'> */}
     
  

      {/* </div> */}
      

        </div>
      
        <div className='col-lg-4 col-md-6 about__ted'><Fade direction='left' triggerOnce delay={500}>
        <h1 className='about_heading'>Prizes <span className="white-text">& Rewards</span></h1>
                <ul>
                  <li>Winner: Rs. 5000 (one team)</li>
                  <li>Runner up: Rs. 2000 (one team)</li>
                  <li>DevGirl Champs (Team comprises of only girls): Rs. 500 (one team) </li>
                  <li>Emerging Dev (Team comprises of only 2021 batch students): Rs.500 (one team)</li>
                  <li>Other exciting rewards : Rs. 2000 (Divided among 5 teams)</li>
                  <li>Participation certificate for all teams</li>
                  <li>Awarded teams get an opportunity to work with WDMC development cell (paid intern)</li>

                  </ul>
</Fade>
                    </div>
      </div>

    </div>
   
  )
}
