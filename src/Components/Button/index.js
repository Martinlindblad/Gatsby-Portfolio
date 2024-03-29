import React, { useState } from "react"

const Button = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  return <button onClick={() => handleClick()}>Click Me! {counter}</button>
}

export default Button
