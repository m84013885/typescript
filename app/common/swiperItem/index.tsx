import * as React from 'react'
import { useEffect, useRef } from 'react'
import './swiper.common.css'
import './swiper'

const SwiperItem = ({ children }: any) => {
    const mySwiper = useRef(null)
    useEffect(() => {
        if (mySwiper.current) {
            mySwiper.current.destroy()
        }
        mySwiper.current = new window.Swiper('.swiper-content', {
            loop: true,
            observeParents: true,
            observer: true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            }
        })
    }, [children])
    const renderChildren = () => {
        let swiperDom
        if (children.length) {
            swiperDom = children.map((c: any, i: number) => {
                return (
                    <div className="swiper-slide" key={i}>
                        {c}
                    </div>
                )
            })
        } else {
            return (
                <div className="swiper-slide">
                    {children}
                </div>
            )
        }
        return swiperDom
    }
    return (
        <div className="swiper-container swiper-content">
            <div className="swiper-wrapper">
                {renderChildren()}
            </div>
        </div>
    )
}
export default SwiperItem