import React, { Component } from 'react';
import "./Draft.css";
import profile from "./images/profile-dog-lg.jpg";
import project1 from './assets/nerdWords.png';

 class Draft extends Component {
   constructor(props) {
     super(props);
     // state
   }
   render() {
     return(
       //Initial drafting phase for html/css skeleton
       <div className="Home-container">
         <div style={{backgroundColor: "white"}}>
           <div className="Home-nav">
             <h2>About</h2>
             <h2>Projects</h2>
             <h2>Hire</h2>
           </div>

         <div className="Home">
           <div className="Home-name">
             <h1>Mark Swinimer</h1>
             <h2>web developer</h2>
           </div>
           <div className="Home-intro">
             <div className="intro-info">
               <p>
                 My passion is writing clean, creative, and functional solutions.
               </p>
             </div>
             {/* <div className="intro-profile">
               <img src={profile} />
             </div> */}
           </div>
           <div className="Home-content">
             <div className="Home-project">
               {/* <div className="tag">
                 TAG
               </div> */}
               <div className="box">
                 <img src="https://assets.pcmag.com/media/images/521567-how-to-build-a-website.jpg?thumb=y&width=810&height=456"/>
                 {/* <img src={project1}/> */}
               </div>
             </div>
             <div className="Home-project-info">
               <h2>Web Developer</h2>
               <h3>Web applications in React</h3>
               <p>Making projects is like making sentances. You type and you type until is somehow makes sense. But wait. It doesn't. So you type some more just to fill out the rest of this space because that's exactly the point. Filler.</p>
             </div>
           </div>
           <div className="Home-content-ral">
             <div className="Home-project-info-ral">
               <h2>Web Developer</h2>
               <h3>Web applications in React</h3>
               <p>Making projects is like making sentances. You type and you type until it somehow makes sense. But wait. It doesn't. So you type some more just to fill out the rest of this space because that's exactly the point. Filler.</p>
             </div>
             <div className="Home-project-ral">
               {/* <div className="tag">
                 TAG
               </div> */}
               <div className="box-ral">
                 <img src="https://assets.pcmag.com/media/images/521567-how-to-build-a-website.jpg?thumb=y&width=810&height=456"/>
               </div>
             </div>

           </div>
           <div className="Home-content">
             <div className="Home-project">
               {/* <div className="tag">
                 TAG
               </div> */}
               <div className="box">
                 <img src="https://assets.pcmag.com/media/images/521567-how-to-build-a-website.jpg?thumb=y&width=810&height=456"/>
                 {/* <img src={project1}/> */}
               </div>
             </div>
             <div className="Home-project-info">
               <h2>Web Developer</h2>
               <h3>Web applications in React</h3>
               <p>Making projects is like making sentances. You type and you type until is somehow makes sense. But wait. It doesn't. So you type some more just to fill out the rest of this space because that's exactly the point. Filler.</p>
             </div>
           </div>
           <div className="Home-action">
             <h2>Contact Me!</h2>
             <p>I'm always looking to talk about my work and share with other people. You can check out my github repos and other locations here.</p>
             <div className="Home-action-links">
               <div className="action">
                    <img src="https://assets.pcmag.com/media/images/521567-how-to-build-a-website.jpg?thumb=y&width=810&height=456"/>
               </div>
               <div className="action">
                    <img src="https://assets.pcmag.com/media/images/521567-how-to-build-a-website.jpg?thumb=y&width=810&height=456"/>
               </div>
               <div className="action">
                    <img src="https://assets.pcmag.com/media/images/521567-how-to-build-a-website.jpg?thumb=y&width=810&height=456"/>
               </div>
             </div>
           </div>
           <div className="footer">
             <h3>Mark Swinimer</h3>
             <p>markswinimer@gmail.com</p>
             <p>github.com/markswinimer</p>
             <p>linkedin.com/in/markswinimer</p>
           </div>
         </div>
       </div>
       </div>
     )
   }
 }
export default Draft;
