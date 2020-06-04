import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img } from '../../common/index'
import { useClientRect, useInterval } from './useCommon'

import Writer from './writer'
import Tabs from './tabs'

let scrollDOM: any = null

const Main = () => {
    const [lift, setLift] = useState(0)

    const [tabs, setTabs] = useState(2)
    
    useInterval(() => {
        if (scrollDOM) {
            scrollDOM.scrollTop = 99999
        }
    }, 100)
    useEffect(() => {

    }, [])
    const initText = () => {

    }
    return (
        <div className={style.fragment}>
            <div className={style.scrollView} ref={(e) => { scrollDOM = e }}>
                {/* <Writer>
                    请问请问请问请问请问请问请问请问啊请问请问请问请问请问请问请问请问啊请问请问请问请问请问请问请问请问啊请问请问请问请问请问请问请问请问啊
                </Writer> */}
            </div>
            <Tabs />
            <Loading />
            <Mask>
                {/* something */}
            </Mask>
            <Toast />
        </div>
    )
}

export default Main