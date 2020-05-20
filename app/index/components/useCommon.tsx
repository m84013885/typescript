import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"

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
    })
    useEffect(() => {
        function tick() {
            saveCallback.current()
        }
        if (delay !== null) {
            const timer = setInterval(tick, delay)
            return () => clearInterval(timer)
        }
    }, [])
}

export { useClientRect, useInterval }