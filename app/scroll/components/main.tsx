import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img } from '../../common/index'
import { useClientRect, useInterval } from './useCommon'
import * as ScrollTrigger from '@terwanerik/scrolltrigger'

const vw = window.outerWidth / 100

const Main = () => {
    const [move, setMove] = useState(0)
    useEffect(() => {
        const trigger = new ScrollTrigger.default({
            trigger: {
                once: false,    // 切换是否只是一次性
                offset: {
                    // 元素的偏移量要加上视图的偏移量才算整体偏移量
                    // 例如:现在的视图高度是667,元素out的高度是228(还没显示用out元素高度,已经显示用in元素的高度),所以现在的偏移量是228*0.2+667*02
                    element: {
                        x: 0,
                        y: (trigger: any, rect: any, direction: any) => {
                            // rect (整体scrollDOM容器的所有信息)
                            // trigger (内部已经添加的动画)
                            // direction (方向，top,bottom等)
                            // 元素距离视图层多少的偏移量就显示元素
                            return 0.2
                        }
                    },
                    viewport: {
                        x: 0,
                        y: (trigger: any, frame: any, direction: any) => {
                            // trigger (内部已经添加的动画)
                            // frame (视图高宽)
                            // direction (方向，top,bottom等)
                            return trigger.visible ? 0 : 0.2
                        }
                    }
                },
                toggle: {
                    // 元素切换的class,可以数组显示多个元素,也可以只是字符串
                    class: {
                    },
                    // 回调函数
                    callback: {
                        // 元素可见状态变化的回调方法
                        visible: (trigger: any) => {

                        },
                        // 进入元素的回调方法
                        in: (trigger: any) => {
                            return new Promise((resolve, reject) => {
                                setTimeout(resolve, 10)
                            })
                        },
                        // 移出元素的回调方法
                        out: (trigger: any) => {
                            return new Promise((resolve, reject) => {
                                setTimeout(resolve, 10)
                            })
                        }
                    }
                },
            },
            scroll: {
                // 滚动停止后,动画继续执行的毫秒数
                sustain: 200,
                // 滚动条的主体
                element: document.getElementById('scroll'),
                // 滚动中的回调函数
                callback: (e: any) => {
                    if (e.y < 500) {
                        setMove(e.y + 100)
                    }
                },
                // 开始滚动的回调函数
                start: () => { },
                // 停止滚动的回调函数
                stop: () => { },
                // 滚动方向变化的回调函数
                directionChange: () => { }
            }
        })
        trigger.add('.an', {
            toggle: {
                class: {
                    in: ['animateIn'],
                    out: ['animateOut']
                }
            }
        })
    }, [])
    return (
        <React.Fragment>
            <div className={style.scrollView} id="scroll">
                <div className="an"></div>
                <div className={style.move} style={{ top: move + 'px' }}></div>
                <div className={style.test}></div>
                <div className="an"></div>
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