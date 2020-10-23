import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import style from "./main.css"
import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img, Msg, Video, Swiper, Anima, Drawer } from '../../common/index'
import { useInterval, useKeyPress, useRenderTime } from '../../common/useCommon'

const mp4 = require('../assets/482715dbbcc.mp4').default

const Main = () => {
    const [test, setTest] = useState(0)
    return (
        <React.Fragment>
            <div className={style.scrollView} onClick={() => { setTest(3) }}>
                {/* <Video src={mp4} /> */}
                <Swiper
                    autoplay={100000}
                    loop={true}
                    min={20}
                    changeIndex={(e: any) => { console.log(e) }}
                    changeMove={[test, setTest]}
                >
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
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