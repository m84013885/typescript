import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"

window.timer = []

// 查看元素位置与长宽高
function useClientRect() {
    const [rect, setRect] = useState(null);
    const ref = useCallback(node => {
        if (node !== null) {
            setRect(node.getBoundingClientRect());
        }
    }, []);
    return [rect, ref];
}
// 定时器
function useInterval(callback: any, delay: number) {
    const saveCallback: any = useRef()
    useEffect(() => {
        saveCallback.current = callback
        function tick() {
            saveCallback.current()
        }
        if (delay !== null) {
            window.timer.push(setInterval(tick, delay))
        }
    }, [])
}

function _resetScrollTop() {
    window.timer.push(setInterval(() => {
        window.scrollDOM.scrollTop = 99999
    }, 100))
}

export { useClientRect, useInterval, _resetScrollTop }