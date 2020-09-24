import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img, Msg, Video, Swiper } from '../../common/index'
import { useInterval, useKeyPress, useRenderTime } from './useCommon'

import test from '../assets/jb.svga'
import Test from './test'

import { useStore } from '../../utils/stroe'


const Main = () => {
    const { num } = useStore()
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                <Swiper>
                    <div>123</div>
                </Swiper>
                <Test />
                <Video />
                {num}
                {/* something */}
                <div className={style.canvas}>
                    <Svga svga={test} />
                </div>
                <Img className={style.test} />
            </div>
            <Loading />
            <Mask>
                {/* something */}
            </Mask>
            <Toast />
            <Msg />
        </React.Fragment>
    )
}

export default Main