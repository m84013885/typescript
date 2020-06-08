import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img } from '../../common/index'
import { useClientRect, useInterval, _resetScrollTop } from './useCommon'

import Tabs from './tabs'

import ImgAnima from './imgAnima'

import RedText from './redText'
import Writer from './writer'
import Show from './show'

const Main = () => {
    const [state, setState] = useState(0)
    const [content, setContent] = useState([])
    const [moreLevel, setMoreLevel] = useState(0)
    const [tabs, setTabs] = useState([])
    const _resetTimer = () => {
        _resetScrollTop()
        setTimeout(() => {
            for (let i = 0; i < window.timer.length; i++) {
                clearInterval(window.timer[i])
            }
        }, 300)
    }
    const init = () => {
        localStorage.clear()
        let state = {
            name: 1,
            attributeName: 2
        }
        localStorage.setItem('state', JSON.stringify(state))
    }
    useEffect(() => {
        init()
    }, [])
    const bindleGetMore = async () => {
        const res: any = {
            "step": 1,
            "type": 1,
            "content": '123123<r>123</r>ggg<r>asd</r>',
            "level": 1,
            "tabs": [
                {
                    "to": 11,
                    "text": "请问"
                },
                {
                    "to": 14,
                    "text": "请问"
                },
                {
                    "to": 13,
                    "text": "请问"
                }
            ]
        }
        const { level, tabs } = res
        if (level === 1) {
            setTabs(tabs)
        }
        setMoreLevel(level)
        setContent([...content, res])
    }
    const more = (level?: number) => {
        switch (level) {
            case 0:
                return (
                    <div className={style.more} onClick={bindleGetMore}>
                        <div className={style.moreBall}></div>
                        <div className={style.moreBall}></div>
                        <div className={style.moreBall}></div>
                    </div>
                )
            case 1:
                return (
                    <div className={style.arrow} onClick={(e: any) => { e.stopPropagation(); setState(1); _resetTimer() }}></div>
                )
            default:
                return (
                    <div className={style.end}>End</div>
                )
        }
    }
    const _renderContent = (type: number, content: any) => {
        switch (type) {
            case 11:
                return <Show>{content}</Show>
            case 12:
                return <Show type={1}>{content}</Show>
            case 21:
                return <Writer>{content}</Writer>
            default:
                return <div className="text-content"><RedText>{content}</RedText></div>
        }
    }
    return (
        <div className={style.fragment}>
            <div className={style.scrollView} ref={(e) => { window.scrollDOM = e }} onClick={() => { setState(0) }}>
                {content.map((c, i) => {
                    return (
                        <div key={i}>{_renderContent(c.type, c.content)}</div>
                    )
                })}
                {more(moreLevel)}
            </div>
            <Tabs state={state} tabs={tabs} />
            <Loading />
            <Mask>
                <ImgAnima />
            </Mask>
            <Toast />
        </div>
    )
}

export default Main