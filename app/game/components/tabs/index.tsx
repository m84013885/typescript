import * as React from 'react'
import { useState, useEffect } from 'react'
import * as style from "./index.css"

const Index = () => {
  const [state, setState] = useState(0)
  return (
    <div className={state === 1 ? style.tabs1 : style.tabs0}>
      <div></div>
      <div></div>
    </div>
  )
}
export default Index
