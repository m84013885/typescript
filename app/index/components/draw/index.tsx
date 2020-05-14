import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import * as style from "./index.css"

import item from '../../assets/item.png'
const bg = 'https://static.yuanbobo.com/appWebPage/castle/assest/33b1c7963e74d7ecab252f16100cc7fe.png'
const gfit = 'https://static.yuanbobo.com/appWebPage/castle/assest/ca587392819be6c5954e2f27e6a5ddd1.png'


let canvas: any = null
let tempCanvas: any = null
let ctx: any = null
let tempCtx: any = null

const Draw = () => {
    const [animaNum, setAnimaNum] = useState(0)
    const drawBg = () => {
        const img: any = new Image()
        img.src = bg
        img.onload = function () {
            // ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            tempCtx.drawImage(img, 0, 0, canvas.width, canvas.height)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(tempCanvas, 0, 0)
        }
    }
    const drawGiftBg = (callback: any) => {
        const img: any = new Image()
        img.src = item
        img.onload = function () {
            // ctx.drawImage(img, 25, 10, 50, 100)
            tempCtx.drawImage(img, 25, 10, 50, 100)
            callback()
        }
    }
    const drawGift = () => {
        const img: any = new Image()
        img.src = gfit
        img.onload = function () {
            // ctx.drawImage(img, 0, animaNum, 100, 200, 25, 10, 50, 100)
            tempCtx.drawImage(img, 0, animaNum, 100, 200, 25, 10, 50, 100)
            drawBg()
        }

    }
    const drawRect = () => {
        // ctx.fillStyle = "#841617"
        // ctx.fillRect(20, 10, 200, 100)
        tempCtx.fillStyle = "#841617"
        tempCtx.fillRect(20, 10, 200, 100)
    }

    useEffect(() => {
        tempCanvas = document.createElement('canvas') // 新建一个 canvas 作为缓存 canvas
        tempCtx = tempCanvas.getContext('2d')
        tempCanvas.width = canvas.width
        tempCanvas.height = canvas.height
        ctx = canvas.getContext("2d")

        drawRect()
        drawGiftBg(drawGift)

    }, [animaNum])
    useEffect(() => {
        setTimeout(() => {
            if (animaNum < 810) {
                setAnimaNum(animaNum + 1)
            } else {
                setAnimaNum(0)
            }
        }, 5)
    }, [animaNum])
    return (
        <canvas className={style.canvas} ref={(e) => { canvas = e }}></canvas>
    )
}

export default Draw