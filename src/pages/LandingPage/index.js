import anime from 'animejs/lib/anime.es.js';
import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

// import LandingPageHelp from './LandingPageHelp';

// const LandingPage = ({ name }) => (
//     <div>
//         <h1>
//             This is my landing page
//         </h1>
//         <h1>
//             {name && name}
//         </h1>
//         <LandingPageHelp />
//     </div>
// );

const LandingPage = () => (
  <div className="wrapper">
<h1 className="ml8">
  <span className="letters-container">
    <span className="letters letters-left">M<span className="letters bang">真灯</span>L</span>
   
  </span>
  <span className="circle circle-white"></span>
  <span className="circle circle-dark"></span>
  <span className="circle circle-container"><span className="circle circle-dark-dashed"></span></span>
</h1>

<div className="wave"></div>
<div className="wave"></div>
<div className="wave"></div>
<div className="wave"></div>
<div className="wave"></div>
<div className="wave-two"></div>
<div className="wave-two"></div>
<div className="wave-two"></div>
<div className="wave-two"></div>
<div className="wave-two"></div>


  </div>
)
anime.timeline({loop: true})
.add({
    targets: '.wave',
    scale: [0, 1],
    opacity: 0,
    delay: anime.stagger(1000),
    easing: "easeInOutExpo",
    duration: 6000,
});
anime.timeline({loop: true})
.add({
    targets: '.wave-two',
    scale: [0, 1],
    opacity: 0,
    delay: anime.stagger(500),
    easing: "easeInOutExpo",
    duration: 6000,
});
anime.timeline({loop: true})
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1100,
    easing: "easeOutExpo",
    delay: 1500
  
  });

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true
});




export default LandingPage
