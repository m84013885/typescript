import * as React from "react";
import { useEffect, useState } from "react";
import style from "./index.css"

// http://static.yuanbobo.com/pclive/images/animation3/63/00000.png

let canvas: any = null
let ctx: any = null
let canvasContent: any = null

// 图片播放数字
let number: number = 0
// 图片加载数字
let imageLoadNum = 0
// 加载完的数组
let arrImage: any[] = []

const fps = 25;
let now;
let then = Date.now();
const interval = 1000 / fps;
let delta;

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

            requestAnimFrame(step)

            now = Date.now();
            delta = now - then;
            if (delta > interval) {
                // 这里不能简单then=now，否则还会出现上边简单做法的细微时间差问题。例如fps=10，每帧100ms，而现在每16ms（60fps）执行一次draw。16*7=112>100，需要7次才实际绘制一次。这个情况下，实际10帧需要112*10=1120ms>1000ms才绘制完成。
                then = now - (delta % interval);
                drawImgae()
                number++
            }

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
            let url
            const img = new Image()
            if (path.indexOf('http') !== -1) {
                const num = i < 10 ? '0000' + i : i < 100 ? '000' + i : '00' + i
                url = `${path}${num}.png`
                img.src = url
            } else {
                url = require(`../../${path}${i}.anima.png`)
                img.src = url.default
            }
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