import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import style from "./main.css"
import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img, Msg, Video, Swiper, Anima } from '../../common/index'
import { useInterval, useKeyPress, useRenderTime } from '../../common/useCommon'

const mp4 = require('../assets/482715dbbcc.mp4').default

const Main = () => {
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                <Video src={mp4}/>
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