import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img } from '../../common/index'
import { useClientRect, useInterval } from './useCommon'

import Writer from './writer'

const Main = () => {
    const _resetScrollTop = (e: any) => {
        
    }
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                <div className={style.box} ref={(e) => { _resetScrollTop(e) }}>
                    <Writer>
                        请问请问请问请问请问请问请问请问啊请问请问请问请问请问请问请问请问啊请问请问请问请问请问请问请问请问啊请问请问请问请问请问请问请问请问啊
                    </Writer>
                </div>

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