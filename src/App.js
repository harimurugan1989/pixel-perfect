import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Banner } from "./components/Banner";
import { FixedBack } from "./components/FixedBack";
import { Theme } from './components/Theme'
import { About } from './components/About'
import { Copyright } from './components/Copyright'
import ParticleBackground from './components/ParticleBackground';
import { Navbaar } from './components/Navbaar';
import { Timeline } from './components/Timeline';
// import {createBrowserHistory} from 'history';

// export const customHistory = createBrowserHistory(); 
function App() {
  const [backend, setBackend] = useState([{}])
  // useEffect(()=>{
  //   fetch("/api").then(response => response.json()).then(data => {
  //     setBackend(data)
  //   })
  // },[])

useEffect(()=>{
  let slug = window.location.href.match(/[^#]+/g)
  console.log(slug)
  if(slug[slug.length-1]==="timeline")
  {
    var element = document.getElementById("timeline");
    element.scrollIntoView();
  }
},[]);
  return (
    <div className="App">
      
      <Navbaar /> 
      <Switch>
        <Route exact path='/'>
             <FixedBack />
          <ParticleBackground />
           <Banner />
       
          <Theme /> 
          <div className='center-heading'>
                     <h2>Hackathon Timeline</h2>
                     </div>
 
      <Timeline />
          <About />
          {/* <Test/> */}
          {/* <Connect /> */}
          {/* <p>{backend}</p> */}
          
          {/* <Footer /> */}
          <Copyright /> 
          
        </Route>
       



      </Switch>
     




      {/* <Skills />
      <Projects /> */}

    </div>
  );
}

export default App;
