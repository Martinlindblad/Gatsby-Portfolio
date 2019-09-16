import React from "react"
import ReactDOM from "react-dom"
// import React from "react-hot-loader"
import "../css/style.css"
import "../css/index.scss"

import LandingPage from "./LandingPage/index"
import Person from "../Components/Person"
import Button from "../Components/Button"
import Layout from "../Components/Layouts"

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <LandingPage />
      </div>
    )
  }
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default App;