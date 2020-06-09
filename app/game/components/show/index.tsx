import * as React from 'react'
import { useState, useEffect } from 'react'
import * as style from "./index.css"

import RedText from '../redText'

interface prop {
  children: string,
  width: number,
  type?: number,
}

const Index = (prop: prop) => {
  const { children, type, width } = prop
  return (
    <div className={`${type === 1 ? style.shake : style.show} text-content`} style={{ width: width + 'px' }}>
      <RedText>{children}</RedText>
    </div>
  )
}
export default Index
