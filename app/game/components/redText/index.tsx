import * as React from 'react'
import { useState, useEffect } from 'react'
import * as style from "./index.css"

interface prop {
  children: string
}

const Index = (prop: prop) => {
  let { children } = prop
  const [putText, setPutText] = useState([])
  let all: any[] = []
  let init = 0
  const _render = () => {
    if (children.indexOf('<r>') !== -1) {
      const arr1 = children.slice(0, children.indexOf('<r>'))
      const arr2 = children.slice(children.indexOf('<r>') + 3, children.indexOf('</r>'))
      children = children.slice(children.indexOf('</r>') + 4)
      all.push(<span key={init}>{arr1}</span>)
      all.push(<span className={style.red} key={init + 1}>{arr2}</span>)
      init += 2
      _render()
    } else {
      setPutText(all)
    }
  }
  useEffect(() => {
    _render()
  }, [])
  return (
    <React.Fragment>
      {putText}
    </React.Fragment>
  )
}
export default Index
