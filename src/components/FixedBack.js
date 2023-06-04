import React, { useState, useEffect, useRef } from 'react'
import { Fade } from "react-awesome-reveal";
// import TicketForm from './TicketForm'; 
import './FixedBack.css'
import { Button, Modal } from 'react-bootstrap';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Timer from './Timer';

gsap.registerPlugin(ScrollTrigger);


export const FixedBack = () => {
const fixedHeading = useRef(null);
const [show,setShow] = useState(false)

const handleShow = () => setShow(true)
const handleClose = () => setShow(false)

const [show2,setShow2] = useState(false)
const handleShow2 = () => {
  setShow2(true)
console.log(show2)
}
const handleClose2 = () => setShow2(false)
// useEffect(()=> {
//   const el = fixedHeading.current;
//   gsap.fromTo(el , {fontSize : 50}, {fontSize: 100, scrollTrigger:{
//     // start: "top center",
//     trigger: el,

//     scrub: true,
//     // markers: true,

//   }})
// },[])
  const mystyle = {
    color: "white",
    fontWeight: "900",
    letterSpacing: "-1px",
    fontFamily: "HelveticaNeueLTStd,sans-serif",
    fontSize: "40",
    textAlign: "left"
    // position: "fixed",
   
   
    // transformOrigin: "center top",
    // transform: `scale(${mass})`,
  };
  return (

    

    <div className='fixedBack'>
      {/* <div className='fixedBack__none'></div> */}
      {/* <div className='fixedBack__heading'>
        <h1 style={mystyle} ref={fixedHeading}>REVERBERATED '23</h1>
      </div> */}






            <div className="headingmain">
            <div className='heading__mobile2'>
        <Fade direction='up' triggerOnce>
        <span className="makeitred"><h2>WDMC Presents Internal Design Hackathon</h2> </span> </Fade>
      </div>
      

      <div className='heading__mobile'>
        <Fade direction='up' triggerOnce>
        {/* <h1>REVERBERA<span className="makeitred">TED</span></h1>*/}
     <h1>PIXEL PERFECT : Exploring Front End Brilliance</h1></Fade> 
 
      </div>
      <div className='heading__mobile2'>
        <Fade direction='up' triggerOnce>
        <span className="makeitred"> <h2>Learn ● Evolve ● Triumph </h2> </span> </Fade>
        

      </div>
      <div className='heading__mobile2'>
      {/* <button className="button2 redback" ><span>Click Here For Registration</span></button> */}
      <button className="button2 redback" onClick={() => { window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSd5dZF3v-r9irXmCH9S2BRLPIPSxWsPyRF2hbOLyMvpdZJ48Q/viewform'; }} id="myButton" target="_blank"><span>Click Here For Registration</span></button>
  

      </div>
      
      
      {/* <section class="container events">
  <div class="row">
    <article class="card fl-left">
      <section class="date">
        <time datetime="15th April">
          <span className='makeitred'>15</span><span>April</span>
        </time>
      </section>
      <section class="card-cont">
        <small>dj khaled</small>
        <h3>live in sydney</h3>
        <div class="even-date">
         <i class="fa fa-calendar"></i>
         <time>
           <span>wednesday 28 december 2014</span>
           <span>08:55pm to 12:00 am</span>
         </time>
        </div>
        <div class="even-info">
          <i class="fa fa-map-marker"></i>
          <p>
            nexen square for people australia, sydney
          </p>
        </div>
     
      </section>
    </article>
 
  </div>
</section> */}



<div className='heading__mobile3'>


        <Fade direction='up' triggerOnce>
      <h2 className='white-text'>Registration Closes in</h2> </Fade>
      </div>
      <div className="Timer">
      
      < Timer />
      </div>
    
</div>


</div>



      /* <div className="Timer">
                <Timer/>

  
      <div class="outer buttonsintimer">
  
    <button className="button2 redback" onClick={handleShow2} data-toggle="modal"><span>DON'T MISS</span></button>
        <button className="button" onClick={handleShow} data-toggle="modal"><span>See You in next Edition!</span></button>
  </div>
      <Modal show={show} onHide={handleClose} centered>
          <Modal.Header style={{backgroundColor:'black'}} closeButton>
            <Modal.Title style={{color:'red', backgroundColor:'black'}}>Book Tickets</Modal.Title>
          </Modal.Header>
          
            <Modal.Body style={{backgroundColor:'black'}}>
                <TicketForm />
            </Modal.Body>
      </Modal>  

      <Modal show={show2} onHide={handleClose2} centered>
          <Modal.Header style={{backgroundColor:'black'}} closeButton>
            <Modal.Title style={{color:'#DD352A', backgroundColor:'black'}}>Don't Miss</Modal.Title>
          </Modal.Header>
          
            <Modal.Body style={{backgroundColor:'black'}}>
            <section class="in-store">
  {/* <h2>What's In Store for You?</h2> */
//   <ul>
//     <li>Meet and Greet with the speakers</li>
//     <li>Exclusive TEDx goodies</li>
//     <li>Free newslaundry one year subscription worth &#8377;3000</li>
//     <li> Sm<span className='makeitred'>aaa</span>sh Coupons for attendees worth &#8377; 500</li>
//     <li>Exciting games</li>
//     <li>Lunch and Snacks</li>
//     <li>E-Certificates for attendees</li>
//   </ul>

//   <h5>and many more <span className='makeitred'>sur</span>prise</h5>
// </section>

//             </Modal.Body>
//       </Modal>  
//                 </div>
//        */}
//     </div>
  )
}

