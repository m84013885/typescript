import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import style from "./main.css"
import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img, Msg, Video, Swiper, Anima, Drawer } from '../../common/index'
import { useInterval, useKeyPress, useRenderTime } from '../../common/useCommon'

const test = [
    { src: 'https://static.yuanbobo.com/anima/entry/27/', imgNumber: 75 }
]

const Main = () => {
    const [goPlay, setGoPlay] = useState(false)
    return (
        <React.Fragment>
            <div className={style.scrollView} onClick={() => { setGoPlay(true) }}>
                <Anima path={test[0].src} imgNumber={test[0].imgNumber} play={goPlay} />
            </div>
            <Loading />
            <Mask>
                <div className={style.test}></div>
                {/* something */}
            </Mask>
            <Drawer>
                <div className={style.test}></div>
            </Drawer>
            <Toast />
            <Msg />
        </React.Fragment>
    )
}

export default Main