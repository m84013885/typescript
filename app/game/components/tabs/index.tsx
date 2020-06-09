import * as React from 'react'
import { useState, useEffect } from 'react'
import * as style from "./index.css"

interface prop {
  state: number
  tabs: any[],
  nextStep: Function
}

const Index = (prop: prop) => {
  const { state, tabs, nextStep } = prop
  const _bigScreen = () => {
    let result = false
    const rate = window.screen.height / window.screen.width
    let limit = 1.8  // 临界判断值  

    if (rate > limit) {
      result = true
    }
    return result
  }
  return (
    <div className={state === 1 ? style.tabsShow : _bigScreen ? style.tabsHideB : style.tabsHide}>
      <div className={style.tabsBox}>
        {state === 1 && tabs && tabs.map((c, i) => {
          return <div className={style.box} key={i} onClick={() => { c.mask ? window.setMask(0) : ''; nextStep(c.to) }}>{c.text}</div>
        })}
      </div>
    </div >
  )
}
export default Index
