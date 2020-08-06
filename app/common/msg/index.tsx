import * as React from "react";
import { useEffect, useState } from "react";
import * as style from "./index.css"

let init = 0

const Msg = () => {
    const [list, setList] = useState([])
    const pushList = (text: string) => {
        const id = init
        const object = {
            id, text
        }
        setList([object, ...list])
        init++
    }
    window.setMsg = pushList
    const _renderAnimaEnd = (e: any, id: number) => {
        if (e.animationName.indexOf('opacity') !== -1) {
            for (let i = 0; i < list.length; i++) {
                if (list[i].id === id) {
                    list.splice(i, 1)
                    setList(list.slice())
                }
            }
        }
    }
    return (
        <div className={list.length <= 0 ? style.none : style.msgBox}>
            {list.map((c) => {
                return (
                    <div className={style.msg} key={c.id}>
                        <span className={style.opacity} onAnimationEnd={(e) => { _renderAnimaEnd(e, c.id) }}>{c.text}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Msg