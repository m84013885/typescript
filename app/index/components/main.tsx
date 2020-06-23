import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img } from '../../common/index'
import { useClientRect, useInterval } from './useCommon'

const Main = () => {
    useEffect(() => {
        const fetch = async () => {
            const res = await _fetch({
                url: 'https://huangqm.xyz/server/',
                method: 'POST',
                body: {
                    a: 1
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