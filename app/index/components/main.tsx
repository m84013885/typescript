import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import style from "./main.css"
import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img, Msg, Video, Swiper, Anima, Drawer } from '../../common/index'
import { useInterval, useKeyPress, useRenderTime } from '../../common/useCommon'

const test = [
    { src: 'https://static.yuanbobo.com/anima/remix/142/', imgNumber: 121, initNumber: 1 },
    { src: 'https://static.yuanbobo.com/anima/entry/27/', imgNumber: 75 },
]

const Main = () => {
    const [goPlay, setGoPlay] = useState(false)
    return (
        <React.Fragment>
            <div className={style.scrollView} onClick={() => { setGoPlay(true) }}>
                <Anima path={test[0].src} imgNumber={test[0].imgNumber} initNumber={test[0].initNumber || 0} play={goPlay} callback={() => { setGoPlay(false) }}/>
                <Swiper autoplay={5000}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </Swiper>
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