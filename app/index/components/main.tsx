import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img, Msg, Video, Swiper, Anima } from '../../common/index'
import { useInterval, useKeyPress, useRenderTime } from '../../common/useCommon'

const Main = () => {
    const [anima, setAnima] = useState(false)
    return (
        <React.Fragment>
            <div className={style.scrollView} onClick={() => { setAnima(true) }}>
                {/* something */}
                <Anima imgNumber={125} path='index/assets/anima/' play={anima} callback={() => { console.log('end') }} />
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