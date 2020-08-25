import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"


// 定时器
/*
useInterval(()=>{
    
},1000)
停止某个定时器
clearInterval(window.timer[num])
*/
window.timer = []
function useInterval(callback: any, delay: number) {
    const saveCallback: any = useRef()
    useEffect(() => {
        saveCallback.current = callback
    })
    useEffect(() => {
        function tick() {
            saveCallback.current()
        }
        if (delay !== null) {
            window.timer.push(setInterval(tick, delay))
        }
    }, [])
}

// key事件按键
/*
    const left = useKeyPress(65)
    useEffect(()=>{
    当left为true就是点击下去了
    },[left])
*/
function useKeyPress(targetKey: any) {
    const [keyPressed, setKeyPressed] = useState(false)
    function downHandler(prop: any) {
        const { keyCode } = prop
        if (keyCode === targetKey) {
            setKeyPressed(true)
        }
    }
    const upHandler = (prop: any) => {
        const { keyCode } = prop
        if (keyCode === targetKey) {
            setKeyPressed(false)
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', downHandler)
        window.addEventListener('keyup', upHandler)
        return () => {
            window.removeEventListener('keydown', downHandler)
            window.removeEventListener('keyup', upHandler)
        }
    }, [])
    return keyPressed
}

// 参数时间戳
/*
    timeEnd时间戳-timeStart时间戳
*/
function useRenderTime(timeStart: number, timeEnd: number) {
    const timeStartYear = new Date(timeStart).getFullYear() // 开始年
    const timeStartMonth = new Date(timeStart).getMonth() + 1 // 开始月
    const timeStartDay = new Date(timeStart).getDate() // 开始日

    const timeEndYear = new Date(timeEnd).getFullYear() // 结束年
    const timeEndMonth = new Date(timeEnd).getMonth() + 1 // 结束月
    const timeEndDay = new Date(timeEnd).getDate() // 结束日

    let year = 0
    if (timeStartYear !== timeEndYear) {
        if (timeStartMonth >= timeEndMonth || timeStartDay >= timeEndDay) {
            year = timeEndYear - timeStartYear - 1
            timeStart = new Date(`${timeEndYear - 1}/${timeStartMonth}/${timeStartDay}`).getTime()   // 获取最后年的时间戳
        } else {
            year = timeEndYear - timeStartYear
            timeStart = new Date(`${timeEndYear}/${timeStartMonth}/${timeStartDay}`).getTime()   // 获取最后年的时间戳
        }
    }
    const time = (Math.abs(timeEnd - timeStart)) / 1000
    let day = time > 60 * 60 * 24 ? parseInt(time / (60 * 60 * 24) + '') : 0
    let hour = time > 60 * 60 ? parseInt(time / (60 * 60) + '') - (day * 24) : 0
    let minute = time > 60 ? parseInt(time / 60 + '') - (day * 24 * 60) - (hour * 60) : 0
    let second = parseInt(time + '') - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)

    return { year, day, hour, minute, second }
}


export { useInterval, useKeyPress, useRenderTime }