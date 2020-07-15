import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img } from '../../common/index'
import { useClientRect, useInterval } from './useCommon'

const www: any = [{
    "step": 1,
    "content": '我企鹅',
    "to": 1,
    "auto": 1,
    "img": null,
    "tabs": [
        {
            "need": [
                { "famous": 3 }
            ],
            "to": 9,
            "text": "拜访父亲故交"
        },
    ],
    "tag": [
        { "lift": 1 }
    ]

}]
const wwww: any = [[1], [2, 3]]

const Main = () => {
    // useEffect(() => {
    //     const fetch = async () => {
    //         const res = await _fetch({
    //             url: 'http://172.16.0.133:3000',
    //             method: 'POST',
    //             body: {
    //                 a: wwww,
    //                 b: www
    //             }
    //         })
    //         console.log(res)
    //     }
    //     fetch()
    // }, [])
    const intersect = function (nums1: number[], nums2: number[]) {
        const arr = []
        const bool = nums1.length === nums2.length ? 3 : nums1.length > nums2.length ? 2 : 1
        for (let i = 0; i < nums1.length; i++) {
            for (let j = 0; j < nums2.length; j++) {
                if (nums1[i] === nums2[j]) {
                    arr.push(nums1[i])
                    bool === 2 ? j++ : bool === 1 ? i++ : ''
                }
            }
        }
        return arr
    };
    useEffect(() => {
        console.log(intersect([2, 1], [1, 2]))
    }, [])
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                {/* something */}
            </div>
            <Loading />
            <Mask>
                {/* something */}
            </Mask>
            <Toast />
        </React.Fragment>
    )
}

export default Main