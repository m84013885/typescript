import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import style from "./main.css"
import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img, Msg, Video, Swiper, SwiperItem, Anima, Drawer } from '../../common/index'
import { useInterval, useKeyPress, useRenderTime } from '../../common/useCommon'

const Main = () => {
    const [banner, setBanner] = useState(['123', '456'])
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                {/* something */}
                <SwiperItem>
                    {banner.map((c: any, i: number) => {
                        return <div key={i}>{c}</div>
                    })}
                </SwiperItem>
                123
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