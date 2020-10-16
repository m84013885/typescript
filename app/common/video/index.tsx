import * as React from "react"
import { useEffect, useState } from "react"
import style from './index.css'

import './vap'
// import demo from '../../index/assets/demo.mp4'
// import config from './demo.json'
const config = require('./vapc.json')
const demo = require('../../index/assets/482715dbbcc.mp4')

let dom: any = null
let v: any = null

interface prop {
    play: boolean,
    src: string
}

const Video = (prop: prop) => {
    const { play, src } = prop
    useEffect(() => {
        if (dom && src) {
            v = new window.Vap({
                container: dom,
                // 素材视频链接
                src: src,
                // 素材配置json对象
                config: config,
                width: window.outerWidth,
                height: window.outerHeight,
                // 同素材生成工具中配置的保持一致
                fps: 20
            })
                .on('playing', () => {
                    console.log('playing')
                })
                .on('ended', () => {
                    console.log('play ended')
                })
        }
    }, [src])
    useEffect(() => {
        if (play) {
            v.play()
        }
    }, [play])
    return (
        <React.Fragment>
            <div id='asd' className={style.bg} onClick={() => { v.play() }}>按钮</div>
            <div ref={(c) => { dom = c }}></div>
        </React.Fragment>
    )
}

export default Video