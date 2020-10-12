import * as React from "react";
import { useEffect, useState } from "react";
import * as style from "./index.css"

const arrImg: any = []

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
    let number: number = 0
    for (let i = 0; i < imgNumber; i++) {
        arrImg.push(require(`../../${path}${i}.anima.png`).default)
    }
    const [num, setNum] = useState(0)
    const step = () => {
        if (number < imgNumber) {
            setNum(number++)
            requestAnimFrame(step)
        } else {
            callback && callback()
        }
    }
    useEffect(() => {
        if (play) {
            requestAnimFrame(step)
        }
    }, [play])
    return (
        <div className={play ? style.imageContent : style.none}>
            <img className={style.image} src={arrImg[num]} />
        </div>
    )
}

export default Anima