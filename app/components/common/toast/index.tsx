import * as React from "react";
import { useEffect, useState } from "react";
import * as style from "./index.css"

const Toast = () => {
    const [toastText, setToastText] = useState('')
    const [anima, setAnima] = useState(true)
    window.setToast = setToastText
    useEffect(() => {
        setAnima(true)
    }, [toastText])
    const _render = () => {
        if (anima) {
            return (
                <div className={style.toast}>123</div>
            )
        }

    }
    return (
        <React.Fragment>
            {_render()}
        </React.Fragment>
    )
}

export default Toast