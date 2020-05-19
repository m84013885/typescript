import * as React from "react";
import { useEffect, useState, useCallback, useMemo, useReducer } from "react";
import * as style from "./main.css"

import useFetch from '../../utils/usefetch'

import { Toast, Svga, Mask, Loading, Img } from '../../common/index'
import Draw from './draw'


const Main = () => {
    useEffect(() => {
        // const fetchData = async () => {
        //     const res: any = await useFetch({
        //         url: '/v1/castle/rank',
        //         method: 'GET',
        //         query: {
        //             source_id: serverData.user.source_id || 0,
        //             source: serverData.user.source || 0
        //         }
        //     })
        //     console.log(res)
        // }
        // fetchData()
    }, [])
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                <Img className={style.test}>123</Img>
            </div>
            <Loading />
            <Mask>
                <div>1</div>
                <div>2</div>
            </Mask>
            <Toast />
        </React.Fragment>
    )
}

export default Main