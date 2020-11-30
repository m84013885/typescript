import * as React from "react"
import * as ReactDOM from "react-dom"
import './index.common.css'
// import * as VConsole from 'vconsole'
// new VConsole()
const dpr = window.devicePixelRatio || 1
const docEl = document.documentElement
// detect 0.5px supports
if (dpr >= 2) {
    const fakeBody = document.createElement('body')
    const testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
}

import Main from "./components/main"
import { StoreProvider } from '../utils/stroe'


ReactDOM.render(<StoreProvider><Main /></StoreProvider>, document.getElementById("main"))