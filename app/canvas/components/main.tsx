import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img } from '../../common/index'
import { useClientRect, useInterval } from './useCommon'

const Main = () => {
    useEffect(() => {

    }, [])
    const bindleMove = (e: any) => {
        console.log(e.targetTouches[0].pageY)
    }
    return (
        <React.Fragment>
            <canvas className={style.canvas} id="canvas" onTouchMove={(e: any) => { bindleMove(e) }}></canvas>
            {/* <div className={style.scrollView}>
            </div> */}
            <Loading />
            <Mask>
                {/* something */}
            </Mask>
            <Toast />
        </React.Fragment>
    )
}

export default Main