import React from "react"
import "../css/style.css"
import "../css/index.scss"

import LandingPage from "./LandingPage"
import Person from "../Components/Person"
import Button from "../Components/Button"
import Layout from "../Components/Layouts"

const name = "Martin"
const people = [
  {
    name: "Alexander",
    image:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg",
  },
  {
    name: "Martin",
    image:
      "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/01/shutterstock_587562362.jpg",
  },
  {
    name: "Saitama",
    image:
      "https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1",
  },
]

export default () => (
  // <div>
  //   <LandingPage name={name} />
  //   people.map((p) => (
  //           <ul>
  //               <li>
  //                   <Person p={p} />
  //               </li>
  //           </ul>
  //       ))
  //   <h1>asd</h1>
  // </div>
  <LandingPage />

)
