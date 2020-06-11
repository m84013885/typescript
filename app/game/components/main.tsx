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

import { fetchRes, event } from './text'

let step = 0
let thisStepTo = 0

const Main = () => {
    const [state, setState] = useState(0)
    const [content, setContent] = useState([])
    const [moreLevel, setMoreLevel] = useState(0)
    const [tabs, setTabs] = useState([])
    const [maskImg, setMaskImg] = useState('')
    const [maskImgType, setMaskImgType] = useState('')
    const [resetTo, setResetTo] = useState(null)
    const _resetTimer = () => {
        _resetScrollTop()
        setTimeout(() => {
            for (let i = 0; i < window.timer.length; i++) {
                clearInterval(window.timer[i])
            }
        }, 300)
    }
    useEffect(() => {
        nextStep()
        localStorage.clear()
    }, [])
    const bindleGetMore = () => {
        if (resetTo) {
            thisStepTo = resetTo
            nextStep(resetTo)
            thisStepTo === resetTo && setResetTo(null)
        } else {
            nextStep()
        }
    }
    const conditionsEvent = () => {
        for (let i = 0; i < event.length; i++) {
            const num = parseInt(localStorage[event[i].name]) || 0
            if (event[i].max <= num) {
                const res: any = event[i]
                res.max = 9999
                const { to } = res
                setState(0)
                setMoreLevel(0)
                setResetTo(to)
            }
        }
    }
    const nextStep = (stepNumber?: number) => {
        let init = 0
        if (stepNumber) {
            for (let i = 0; i < fetchRes.length; i++) {
                if (fetchRes[i].step === stepNumber) {
                    init = i
                }
            }
            step = init
        } else {
            init = step
        }
        const res: any = fetchRes[init]
        const { level, tabs, img, imgType, resetTo } = res
        if (level === 1) {
            setTabs(tabs)
        }
        if (img) {
            setMaskImg(img)
            setMaskImgType(imgType)
        }
        if (resetTo) {
            setResetTo(resetTo)
            thisStepTo = resetTo
        }
        setState(0)
        setMoreLevel(level)
        setContent([...content, res])
        step++
        conditionsEvent()
    }
    const more = (level?: number) => {
        switch (level) {
            case 0:
                return (
                    <div className={style.more} onClick={() => { bindleGetMore(); _resetTimer() }}>
                        <div className={style.moreBall}></div>
                        <div className={style.moreBall}></div>
                        <div className={style.moreBall}></div>
                    </div>
                )
            case 1:
                return (
                    <div className={style.arrow} onClick={(e: any) => { e.stopPropagation(); setState(1); _resetTimer() }}></div>
                )
            case 2:
                return (
                    <div className={style.animation} onClick={() => { nextStep(); window.setMask(0); _resetTimer() }}></div>
                )
            default:
                return (
                    <div className={style.end}>End</div>
                )
        }
    }
    const resetMeasurementText = (content: string) => {
        while (content.match('<r>')) {
            content = content.replace('<r>', '')
            content = content.replace('</r>', '')
        }
        const measurementDOM = document.getElementById('measurement')
        let height = 0, width = 0, contentText = ''
        for (let i = 0; i < content.length; i++) {
            contentText = contentText + content.slice(i, i + 1)
            measurementDOM.innerHTML = contentText
            const Mheight = parseInt(window.getComputedStyle(measurementDOM).height)
            if (height !== Mheight && i !== 0) {
                measurementDOM.innerHTML = contentText.slice(0, -1)
                const MWidth = parseInt(window.getComputedStyle(measurementDOM).width)
                for (let i = 0; i < MWidth; i++) {
                    measurementDOM.style.width = (MWidth - i) + 'px'
                    const Mheight = parseInt(window.getComputedStyle(measurementDOM).height)
                    if (Mheight !== height) {
                        width = (MWidth + 1)
                        i = MWidth
                    }
                }
            } else {
                height = Mheight
            }
        }
        if (width === 0) {
            const MWidth = parseInt(window.getComputedStyle(measurementDOM).width)
            width = MWidth
        }
        measurementDOM.style.width = ''
        measurementDOM.innerHTML = ''
        return width
    }
    const _renderContent = (type: number, content: any) => {
        const width = resetMeasurementText(content)
        switch (type) {
            case 11:
                return <Show width={width}>{content}</Show>
            case 12:
                return <Show type={1} width={width}>{content}</Show>
            case 21:
                return <Writer width={width}>{content}</Writer>
            default:
                return <div className="text-content" style={{ width: width + 'px' }}><RedText>{content}</RedText></div>
        }
    }
    const bindleShowImg = (img: string) => {
        if (img) {
            setMaskImg(img)
            setMaskImgType('')
            window.setMask(0)
        }
    }
    return (
        <div className={style.fragment}>
            <div className={style.scrollView} ref={(e) => { window.scrollDOM = e }} onClick={() => { setState(0) }}>
                {content.map((c, i) => {
                    return (
                        <div key={i} className={c.showImg && style.showImgBtn} onClick={() => { bindleShowImg(c.showImg) }}>
                            {_renderContent(c.type, c.content)}
                        </div>
                    )
                })}
                <div>{more(moreLevel)}</div>
            </div>
            <Tabs state={state} tabs={tabs} nextStep={nextStep} />
            <div className={style.measurement}><div id="measurement"></div></div>
            <Loading />
            <Mask>
                <ImgAnima image={maskImg} imageType={maskImgType} nextStep={nextStep} />
            </Mask>
            <Toast />
        </div>
    )
}

export default Main