import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img, Msg } from '../../common/index'
import { useInterval, useKeyPress, useRenderTime } from './useCommon'

import test from '../assets/jb.svga'

const Main = () => {
    return (
        <React.Fragment>
            <div className={style.scrollView}>
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