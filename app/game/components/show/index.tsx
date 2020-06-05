import * as React from 'react'
import { useState, useEffect } from 'react'
import * as style from "./index.css"

interface prop {
  children: string,
  type?: number
}

const Index = (prop: prop) => {
  const { children, type } = prop
  return (
    <div className={`${type === 1 ? style.shake : style.show} text-content`}>
      {children}
    </div>
  )
}
export default Index
