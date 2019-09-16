import React from "react";
import { Spring } from 'react-spring';

export default function LandingPage() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {props => (
        <div style={props}>
            <h1 className="ml8">
              <span className="letters-container">
                <span className="letters letters-left">M<span className="letters bang">真灯</span>L</span>

              </span>
              <span className="circle circle-white"></span>
              <span className="circle circle-dark"></span>
              <span className="circle circle-container"><span className="circle circle-dark-dashed"></span></span>
            </h1>
          </div>
      )}
    </Spring>
  )
}
