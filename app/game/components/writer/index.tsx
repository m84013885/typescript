import * as React from 'react'
import { useState, useEffect } from 'react'
import * as style from "./index.css"

interface prop {
  children: string,
  width: number
}

const Index = (prop: prop) => {
  const { children, width } = prop
  const [writer, setWriter] = useState('')
  const [writerNum, setWriterNum] = useState(0)
  const [writerLast, setWriterLast] = useState(false)
  useEffect(() => {
    const text = children.substr(writerNum, 1)
    if (text) {
      setTimeout(() => {
        setWriterNum(writerNum + 1)
        setWriter(writer + text)
      }, 100)
    } else {
      setTimeout(() => { setWriterLast(true) }, 100)
    }
  }, [writer])
  return (
    <div className='text-content' style={{ width: width + 'px' }}>
      {writer}<span className={writerLast ? style.none : style.writerLast}>_</span>
    </div>
  )
}
export default Index