import * as React from "react";
import { useEffect } from "react";
import * as style from "./main.css"

import useFetch from '../utils/usefetch'

import { Toast, Svga } from './common/index'

const Main = () => {
    useEffect(() => {
        const fetchData = async () => {
            const res: any = await useFetch({
                url: '/v1/castle/rank',
                method: 'GET',
                query: {
                    source_id: serverData.user.source_id || 0,
                    source: serverData.user.source || 0
                }
            })
            console.log(res)
        }
        fetchData()
    }, [])
    return (
        <React.Fragment>
            <h1 className={style.text}> 123!</h1>
            <div className={style.test}></div>
            <div className={style.animaBox}>
                <Svga />
            </div>
            <Toast />
        </React.Fragment>
    )
}

export default Main