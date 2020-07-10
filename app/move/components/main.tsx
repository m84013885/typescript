import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img } from '../../common/index'
import { useClientRect, useInterval } from './useCommon'

const Main = () => {
    useEffect(() => {
        const box = document.getElementById('box')
        const w = box.getBoundingClientRect()
        console.log(w)
    }, [])
    const mouseDown = (e: any) => {
        console.log(e.clientY)
    }
    const mouseMove = (e: any) => {
        console.log(e)
    }
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                <div className={style.box} id='box'
                    onMouseDown={mouseDown}
                    // onMouseMove={mouseMove}
                    
                ></div>
                {/* something */}
            </div>
            <Loading />
            <Mask>
                {/* something */}
            </Mask>
            <Toast />
        </React.Fragment>
    )
}

export default Main