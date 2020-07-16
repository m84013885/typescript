import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img } from '../../common/index'
import { useClientRect, useInterval, useRenderTime } from './useCommon'

const Main = () => {
    useEffect(() => {
        const time = useRenderTime(new Date('1992/11/20').getTime(), new Date().getTime())
        console.log(time)
    }, [])
    return (
        <React.Fragment>
            <div className={style.scrollView}>
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