import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img } from '../../common/index'
import { useClientRect, useInterval } from './useCommon'

const www: any = [{
    "step": 1,
    "content": '我企鹅',
    "to": 1,
    "auto": 1,
    "img": null,
    "tabs": [
        {
            "need": [
                { "famous": 3 }
            ],
            "to": 9,
            "text": "拜访父亲故交"
        },
    ],
    "tag": [
        { "lift": 1 }
    ]

}]
const wwww: any = [[1], [2, 3]]

const Main = () => {
    useEffect(() => {
        const fetch = async () => {
            const res = await _fetch({
                url: 'http://172.16.0.133:3000',
                method: 'POST',
                body: {
                    a: wwww,
                    b: www
                }
            })
            console.log(res)
        }
        fetch()
    }, [])
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                {/* something */}
            </div>
            <Loading />
            <Mask>
                {/* something */}
            </Mask>
            <Toast />
        </React.Fragment>
    )
}

export default Main