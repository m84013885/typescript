import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img, Msg, Video, Swiper, Anima } from '../../common/index'
import { useInterval, useKeyPress, useRenderTime } from '../../common/useCommon'

const animaNow = [
    { path: 'index/assets/anima/', num: 125 },
    { path: 'index/assets/anima1/', num: 160 }
]

const Main = () => {
    const [now, setNow] = useState(0)
    const [anima, setAnima] = useState(false)
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                <div className={style.btn} onClick={() => { setAnima(true) }}>
                    播放动画(目前是{now ? '2' : '1'})
                </div>
                <div className={style.btn}>
                    <div onClick={() => { setNow(0) }}>选择1</div>
                    <div onClick={() => { setNow(1) }}>选择2</div>
                </div>

                {/* something */}
                <div className={style.animaContent}>
                    <Anima imgNumber={animaNow[now].num} path={animaNow[now].path} play={anima} callback={() => { setAnima(false) }} />
                </div>

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