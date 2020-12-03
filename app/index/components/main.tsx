import style from "./main.css"
import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img, Msg, Video, Swiper, SwiperItem, Anima, Drawer } from '../../common/index'
import { useInterval, useKeyPress, useRenderTime } from '../../common/useCommon'

const Main = () => {
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                {/* something */}
                <div className={style.test1}></div>
            </div>
            <Loading />
            <Mask>
                {/* something */}
            </Mask>
            <Drawer>
                {/* something */}
            </Drawer>
            <Toast />
            <Msg />
        </React.Fragment>
    )
}

export default Main