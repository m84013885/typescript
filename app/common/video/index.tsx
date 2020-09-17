import * as React from "react"
import { useEffect, useState } from "react"

import * as Vap from 'video-animation-player'
// import demo from '../../index/assets/demo.mp4'
// import config from './demo.json'
const config = require('./demo.json')
const demo = require('../../index/assets/demo.mp4')

let dom: any = null

const Video = () => {
    useEffect(() => {
        console.log(demo)
        console.log(config)
        const vap = new Vap(Object.assign({}, {
            container: dom,
            // 素材视频链接
            src: demo.default,
            // 素材配置json对象
            config: config,
            width: 900,
            height: 600,
            // 同素材生成工具中配置的保持一致
            fps: 20
        }, 1 ? {
            // 融合信息（图片/文字）,同素材生成工具生成的配置文件中的srcTag所对应，比如[imgUser] => imgUser
            imgUser: '//shp.qlogo.cn/pghead/Q3auHgzwzM6TmnCKHzBcyxVPEJ5t4Ria7H18tYJyM40c/0',
            imgAnchor: '//shp.qlogo.cn/pghead/PiajxSqBRaEKRa1v87G8wh37GibiaosmfU334GBWgk7aC8/140',
            textUser: 'user1',
            textAnchor: 'user2'
        } : {}))
            .on('playing', () => {
                console.log('playing')
            })
            .on('ended', () => {
                console.log('play ended')
            })
    }, [dom])
    return (
        <div >
            123
            <div ref={(c) => { dom = c }}></div>
        </div>
    )
}

export default Video