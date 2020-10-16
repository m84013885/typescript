import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import style from "./main.css"
import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img, Msg, Video, Swiper, Anima } from '../../common/index'
import { useInterval, useKeyPress, useRenderTime } from '../../common/useCommon'

const demo1 = require('../assets/482715dbbcc.mp4')
const demo2 = require('../assets/demo.mp4')
const demo3 = require('../assets/hhjd.mp4')

const animaNow = [
    { path: 'http://static.yuanbobo.com/pclive/images/animation3/63/', num: 131 },
    { path: 'index/assets/anima/', num: 125 },
    { path: 'index/assets/anima1/', num: 160 }
]

const Main = () => {
    const [now, setNow] = useState(0)
    const [mp4, setMp4] = useState(false)
    const [anima, setAnima] = useState(false)
    const [mp4Src, setMp4Src] = useState(demo1.default)
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
                <button  onClick={() => { setMp4Src(demo3.default) }}>变化</button>
                {/* <button className={style.button} onClick={() => { setMp4(true) }}>播放按钮</button> */}
                {/* something */}
                <div className={style.animaContent}>
                    <Anima imgNumber={animaNow[now].num} path={animaNow[now].path} play={anima} callback={() => { setAnima(false) }} />
                </div>
                <Video play={mp4} src={mp4Src} />
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