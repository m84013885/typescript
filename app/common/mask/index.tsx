import * as React from 'react'
import { useState, useEffect } from 'react'
import * as style from "./index.css"
const Mask = () => {
  // 控制显示不显示
  const [mask, setMask] = useState(false)
  // 控制动画
  const [show, setShow] = useState(false)
  const [maskAnima, setMaskAnima] = useState(null)
  // 保留child
  const [maskNumber, setMaskNumber] = useState(0)
  window.setMask = setMaskAnima
  useEffect(() => {
    if (maskAnima !== null) {
      setMaskNumber(maskAnima)
      setMask(true)
      setShow(true)
    } else {
      setShow(false)
    }
  }, [maskAnima])
  const closeAnima = (e: any) => {
    if (e.animationName.indexOf('hide') !== -1) {
      setMaskAnima(null)
      setMask(false)
    }
  }
  const _renderMask = () => {
    switch (maskNumber) {
      case 0:
        return (
          <div className={style.test}>1</div>
        )
    }
  }
  return (
    <div className={mask ? style.modal : style.none}>
      <div className={`${style.bg} ${show ? style.show : style.hide}`} onClick={() => { setShow(false) }} onAnimationEnd={(e) => { closeAnima(e) }}></div>
      <div className={`${style.child} ${show ? style.big : style.small}`}>
        {_renderMask()}
      </div>
    </div>
  )
}
export default Mask