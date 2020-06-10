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
  const bindleClick = (c: any) => {
    if (c.state) {
      for (let i = 0; i < c.state.length; i++) {
        if (localStorage[c.state[i].name]) {
          localStorage[c.state[i].name] = parseInt(localStorage[c.state[i].name]) + parseInt(c.state[i].number)
        } else {
          localStorage[c.state[i].name] = c.state[i].number
        }
      }
    }
    c.mask ? window.setMask(0) : ''
    if (c.conditions) {
      const { type, typeName, number, to, next } = c.conditions
      localStorage[typeName] = localStorage[typeName] ? localStorage[typeName] : 0
      if (type === 'min') {
        if (localStorage[typeName] < number) {
          nextStep(to)
        } else {
          nextStep(next)
        }
      } else {
        if (localStorage[typeName] > number) {
          nextStep(to)
        } else {
          nextStep(next)
        }
      }
    } else {
      nextStep(c.to)
    }
  }
  return (
    <div className={state === 1 ? style.tabsShow : _bigScreen ? style.tabsHideB : style.tabsHide}>
      <div className={style.tabsBox}>
        {state === 1 && tabs && tabs.map((c, i) => {
          return <div className={style.box} key={i} onClick={() => { bindleClick(c) }}>{c.text}</div>
        })}
      </div>
    </div >
  )
}
export default Index
