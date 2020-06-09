import * as React from 'react'
import { useState, useEffect } from 'react'
import * as style from "./index.css"

interface prop {
  image: string,
  imageType: string,
  nextStep: Function
}

const Index = (prop: prop) => {
  const { image, nextStep, imageType } = prop
  const [wh, setWh] = useState([50, 50])
  const _renderImg = () => {
    const img = new Image()
    img.src = image
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
  }, [image])
  return (
    <div className={`${style.bg} ${imageType === 'y' ? style.shakeY : imageType === 'x' ? style.shakeX : ''}`} style={{ width: wh[0] + 'px', height: wh[1] + 'px', backgroundImage: `url(${image})` }} onAnimationEnd={() => {
      window.setMask(null)
    }}></div>
  )
}
export default Index
