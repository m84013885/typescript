import * as React from 'react'
import { useState, useEffect } from 'react'
import * as style from "./index.css"

interface prop {
  make: any,
  change: any
}

const Mask = (prop: prop) => {
  const make = prop.make
  const change = prop.change
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
  const _timeEnd = () => {
    const { time, setTime, money, setMoney, cutter, setCutter, ore, setOre, tree, setTree, power, setPower, hot, setHot } = change
    const { score, makeMoney, makeCutter, makeOre, makeTree, makePower, makeHot } = make
    setTime(time + 1)
    setMoney(money + score + makeMoney)
    setCutter(cutter + makeCutter)
    setOre(ore + makeOre)
    setTree(tree + makeTree)
    setPower(makePower)
    setHot(power + hot + makeHot)
    setMaskAnima(null)
  }
  const _reset = () => {
    window.localStorage.clear()
    window.location.href = window.location.href
  }
  const _renderMask = () => {
    switch (maskNumber) {
      case 0:
        return (
          <div className={style.timeEnd}>
            <div className={style.timeEndText}>
              下一回合将得到：
              <span>{`${make.score + make.makeMoney}`}</span>金钱、
              <span>{`${make.makeCutter}`}</span>矿、
              <span>{`${make.makeOre}`}</span>钛、
              <span>{`${make.makeTree}`}</span>植物、
              <span>{`${make.makePower}`}</span>电力、
              <span>{`${make.makeHot + change.power}`}</span>热能
            </div>
            <div className={style.btns}>
              <div className={style.btn} onClick={() => { _timeEnd() }}>确认结束</div>
              <div className={style.btn} onClick={() => { setMaskAnima(null) }}>关闭弹窗</div>
            </div>
          </div>
        )
      case 1:
        return (
          <div className={style.resetBox}>
            <div className={style.btn} onClick={() => { _reset() }}>确认重置</div>
            <div className={style.btn} onClick={() => { setMaskAnima(null) }}>关闭弹窗</div>
          </div>
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
