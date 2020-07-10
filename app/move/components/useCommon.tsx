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
function useKeyPress(targetKey: any) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false)

    // If pressed key is our target key then set to true
    function downHandler(prop: any) {
        const { keyCode } = prop
        if (keyCode === targetKey) {
            setKeyPressed(true);
        }
    }

    // If released key is our target key then set to false
    const upHandler = (prop: any) => {
        const { keyCode } = prop
        if (keyCode === targetKey) {
            setKeyPressed(false);
        }
    };

    // Add event listeners
    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return keyPressed;
}

export { useClientRect, useInterval, useKeyPress }