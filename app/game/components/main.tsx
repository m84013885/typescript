import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img } from '../../common/index'
import { useClientRect, useInterval } from './useCommon'

import Writer from './writer'
import Tabs from './tabs'
import Show from './show'

const Main = () => {
    const [state, setState] = useState(1)
    useEffect(() => {

    }, [])
    const more = (level?: number) => {
        if (level === 0) {
            return (
                <div className={style.more}>
                    <div className={style.moreBall}></div>
                    <div className={style.moreBall}></div>
                    <div className={style.moreBall}></div>
                </div>
            )
        } else if (level === 1) {
            return (
                <div className={style.arrow} onClick={(e: any) => { e.stopPropagation(); setState(1) }}></div>
            )
        } else {
            return (
                <div className={style.end}>End</div>
            )
        }
    }
    return (
        <div className={style.fragment}>
            <div className={style.scrollView} ref={(e) => { window.scrollDOM = e }} onClick={() => { setState(0) }}>
                <Writer>1</Writer>
                <Show>1</Show>
                {more(1)}
            </div>
            <Tabs state={state} />
            <Loading />
            <Mask>
                {/* something */}
            </Mask>
            <Toast />
        </div>
    )
}

export default Main