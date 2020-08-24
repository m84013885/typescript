import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img, Msg } from '../../common/index'
import { useClientRect, useInterval, useKeyPress, useRenderTime } from './useCommon'

const Main = () => {
    const [scale, setScale] = useState([1, 1])
    const [dom, setDom] = useState(null)
    const [numbers, setNumbers] = useState([
        [0, 0]
    ])
    const polygon = (n: number, w: number, h: number) => {
        let deg = 2 * Math.PI / n
        let points = []
        for (let i = 0; i < n; ++i) {
            let theta = deg * i
            let x = 0.5 * Math.cos(theta) + 0.5
            let y = 0.5 * Math.sin(theta) + 0.5
            points.push([w * x, h * y])
        }
        return points
    }
    useEffect(() => {
        setNumbers(polygon(3, 100, 200))
    }, [])
    useEffect(() => {
        if (dom) {
            const height = parseInt(window.getComputedStyle(dom).height)
            const width = parseInt(window.getComputedStyle(dom).width)
            const scale1 = width / 100
            const scale2 = height / 200
            setScale([scale1, scale2])
        }
    }, [dom])
    const _resetNumbers = () => {
        let str = ''
        for (let i = 0; i < numbers.length; i++) {
            let salt = 'L'
            if (i === 0) {
                salt = 'M'
            }
            str += salt + ' ' + numbers[i][0] + ' ' + numbers[i][1]
        }
        str+=' Z'
        return str
    }
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                <div className={style.test} ref={(dom) => { setDom(dom) }}>
                    <svg
                        style={{ transform: `scale(${scale[0]}, ${scale[1]})`, transformOrigin: 'left top' }}
                        width="100"
                        height="200">
                        <path
                            d={_resetNumbers()}
                            stroke="black"
                            fill="transparent"
                        />
                    </svg>
                </div>

                {/* something */}
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