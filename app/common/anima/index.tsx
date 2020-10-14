import * as React from "react";
import { useEffect, useState } from "react";
import style from "./index.css"

let canvas: any = null
let ctx: any = null
let canvasContent: any = null

// 图片播放数字
let number: number = 0
// 图片加载数字
let imageLoadNum = 0
// 加载完的数组
let arrImage: any[] = []

const requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback: any) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

interface prop {
    imgNumber: number,
    path: string,
    play: boolean,
    callback?: () => any
}

const Anima = (prop: prop) => {
    const { imgNumber, path, play, callback } = prop
    const [imageOnLoad, setImageOnLoad] = useState(0)

    const _reset = () => {
        number = 0
        imageLoadNum = 0
        arrImage = []
    }
    const step = () => {
        if (number < imgNumber) {
            drawImgae()
            number++
            requestAnimFrame(step)
        } else {
            _reset()
            callback && callback()
        }
    }
    const drawImgae = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(arrImage[number], 0, 0, canvas.width, canvas.height)
    }
    // 图片加载
    const onImageLoad = () => {
        for (let i = 0; i < imgNumber; i++) {
            const url = require(`../../${path}${i}.anima.png`)
            const img = new Image()
            img.src = url.default
            arrImage.push(img)
            img.onload = () => {
                setImageOnLoad(i)
            }
        }
    }
    useEffect(() => {
        imageLoadNum++
        if (imageLoadNum === imgNumber) {
            // 加载完成
            requestAnimFrame(step)
        }
    }, [imageOnLoad])

    useEffect(() => {
        ctx = canvas.getContext('2d')
        // 初始化canvas长宽
        canvas.width = parseInt(getComputedStyle(canvasContent).width)
        canvas.height = parseInt(getComputedStyle(canvasContent).height)
    }, [])
    useEffect(() => {
        if (play) {
            onImageLoad()
        }
    }, [play])
    return (
        <div className={play ? style.imageContent : style.opacity} ref={(dom) => { canvasContent = dom }}>
            <canvas className={style.image} ref={(dom) => { canvas = dom }}></canvas>
        </div>
    )
}

export default Anima