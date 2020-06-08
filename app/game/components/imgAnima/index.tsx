import * as React from 'react'
import { useState, useEffect } from 'react'
import * as style from "./index.css"

import test from '../../assets/bg.jpg'
console.log(test)

// 300 width,height

const Index = () => {
  const [wh, setWh] = useState([50, 50])
  const _renderImg = () => {
    const img = new Image()
    img.src = test
    if (img.complete) {
      _resetHW(img.width, img.height)
    }
    else {
      img.onload = function () {
        _resetHW(img.width, img.height)
        img.onload = null
      }
    }
  }
  const _resetHW = (w: number, h: number) => {
    const ceil = (w > h ? w : h) / 300
    const height = h / ceil
    const width = w / ceil
    setWh([width, height])
  }

  useEffect(() => {
    _renderImg()
  }, [])
  return (
    <div className={`${style.bg} ${style.shakeY}`} style={{ width: wh[0] + 'px', height: wh[1] + 'px', backgroundImage: `url(${test})` }} onAnimationEnd={() => {
      window.setMask(null)
    }}></div>
  )
}
export default Index
