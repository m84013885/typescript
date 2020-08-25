import * as React from "react";
import { useEffect, useState } from "react";
import * as style from "./index.css"

interface prop {
    className: string;
    children?: any;
}
let lds: any = null
const Img = (prop: prop) => {
    const { className, children } = prop
    const [loading, setLoading] = useState(true)
    const [wh, setWh] = useState([0, 0])
    const [scale, setScale] = useState(1)
    const [init, setInit] = useState(true)
    const _getDom = (e: any) => {
        if (e && init) {
            setInit(false)
            const str = window.getComputedStyle(e).backgroundImage
            const width = parseInt(window.getComputedStyle(e).width)
            const height = parseInt(window.getComputedStyle(e).height)
            setWh([width, height])
            width > height ? setScale(height / 160) : setScale(width / 160)
            const t = str.slice(5, -2)
            const img = new Image()
            img.src = t
            img.onload = () => {
                setLoading(false)
                setScale(1)
            }
        }
    }
    useEffect(() => {
        if (lds) {
            lds.style.webkitTransform = `scale(${scale})`
            lds.style.transform = `scale(${scale})`
        }
    }, [scale])

    const _render = () => {
        if (loading) {
            return (
                <React.Fragment>
                    <div className={style.ldsContent} style={{ width: wh[0] + 'px', height: wh[1] + 'px'}}>
                        <div className={style.lds} ref={(e) => { lds = e }}><div></div><div></div><div></div><div></div></div>
                    </div>
                    <div className={className} style={{ opacity: 0 }} ref={(e) => { _getDom(e) }}></div>
                </React.Fragment>
            )
        } else {
            return (
                <div className={className}>
                    {children}
                </div>
            )
        }
    }
    return (
        <React.Fragment>
            {_render()}
        </React.Fragment>
    )
}

export default Img