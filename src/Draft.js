import React, { Component } from 'react';
import "./Draft.css";

 class Draft extends Component {
   constructor(props) {
     super(props);
     // state
   }
   render() {
     return(
       //Initial drafting phase for html/css skeleton
       <div className="Home-container">
         <div className="Home">
           <div className="Home-name">
             <h1>Mark Swinimer</h1>
             <h2>Web Developer</h2>
           </div>
           <div className="Home-intro">
             <p>
               Hello my name is Mark Swinimer. I'm a web developer working in the Greater Boston area. My passion is writing creating clean, creative, and functional solutions.
             </p>
           </div>
           <div className="Home-content">
             <div className="Home-project">
               <div className="tag">
                 TAG
               </div>
               <div className="box">
                 <img src="https://assets.pcmag.com/media/images/521567-how-to-build-a-website.jpg?thumb=y&width=810&height=456"/>
               </div>
             </div>
             <div className="Home-project-info">
               <h2>Project</h2>
               <p>information about mark</p>
               <p>stats on mark</p>
             </div>
           </div>
         </div>
       </div>
     )
   }
 }
export default Draft;
