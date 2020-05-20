import * as React from "react";
import { useEffect, useState, useCallback, useMemo, useReducer } from "react";
import * as style from "./main.css"

import { Toast, Loading, Img } from '../../common/index'
import Mask from './mask'

const Main = () => {
    const [time, setTime] = useState(parseInt(window.localStorage.time) || 1) // 回合
    const [score, setScore] = useState(parseInt(window.localStorage.score) || 20)   // 分数

    const [money, setMoney] = useState(parseInt(window.localStorage.money) || 0)   // 钱
    const [makeMoney, setMakeMoney] = useState(parseInt(window.localStorage.makeMoney) || 0)   // 钱产能

    const [cutter, setCutter] = useState(parseInt(window.localStorage.cutter) || 0)   // 铁
    const [makeCutter, setMakeCutter] = useState(parseInt(window.localStorage.makeCutter) || 0)   // 铁产能

    const [ore, setOre] = useState(parseInt(window.localStorage.ore) || 0)   // 矿
    const [makeOre, setMakeOre] = useState(parseInt(window.localStorage.makeOre) || 0)   // 矿产能

    const [tree, setTree] = useState(parseInt(window.localStorage.tree) || 0)   // 植物
    const [makeTree, setMakeTree] = useState(parseInt(window.localStorage.makeTree) || 0)   // 植物产能

    const [power, setPower] = useState(parseInt(window.localStorage.power) || 0)   // 电力
    const [makePower, setMakePower] = useState(parseInt(window.localStorage.makePower) || 0)   // 电力产能

    const [hot, setHot] = useState(parseInt(window.localStorage.hot) || 0)   // 热量
    const [makeHot, setMakeHot] = useState(parseInt(window.localStorage.makeHot) || 0)   // 热量产能

    const [active, setActive] = useState(null)
    useEffect(() => {
        window.localStorage.time = time
        window.localStorage.score = score
        window.localStorage.money = money
        window.localStorage.makeMoney = makeMoney
        window.localStorage.cutter = cutter
        window.localStorage.makeCutter = makeCutter
        window.localStorage.ore = ore
        window.localStorage.makeOre = makeOre
        window.localStorage.tree = tree
        window.localStorage.makeTree = makeTree
        window.localStorage.power = power
        window.localStorage.makePower = makePower
        window.localStorage.hot = hot
        window.localStorage.makeHot = makeHot
    }, [time, score, money, makeMoney, cutter, makeCutter, ore, makeOre, tree, makeTree, power, makePower, hot, makeHot])
    const _edit = (number: any, setNumber: any, activeNumber: number, type?: boolean) => {
        if (activeNumber !== active) {
            return false
        }
        if (type) {
            return (
                <React.Fragment>
                    <div className={style.iconBoxL}>
                        <div className={style.minus} onClick={(e) => { e.stopPropagation(); setNumber(number - 1) }}></div>
                        <div className={style.minus} onClick={(e) => { e.stopPropagation(); setNumber(number - 10) }}></div>
                    </div>
                    <div className={style.iconBoxR}>
                        <div className={style.add} onClick={(e) => { e.stopPropagation(); setNumber(number + 1) }}></div>
                        <div className={style.add} onClick={(e) => { e.stopPropagation(); setNumber(number + 10) }}></div>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <div className={`${style.minus} ${style.iconAbsolute}`} onClick={(e) => { e.stopPropagation(); setNumber(number - 1) }}></div>
                    <div className={`${style.add} ${style.iconAbsolute}`} onClick={(e) => { e.stopPropagation(); setNumber(number + 1) }}></div>
                </React.Fragment>
            )
        }
    }
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                <div className={style.all}>
                    <div onClick={() => { active !== 0 ? setActive(0) : setActive(null) }}>
                        改造度:{score}
                        {_edit(score, setScore, 0)}
                    </div>
                    <div>回合:{time}</div>
                </div>
                <div className={style.blockBox}>
                    <div className={style.block} onClick={() => { active !== 1 ? setActive(1) : setActive(null) }}>
                        <div className={style.blockUp}>
                            产能:{makeMoney}
                            {_edit(makeMoney, setMakeMoney, 1)}
                        </div>
                        <div className={style.blockNumber}>
                            {money}<Img className={style.money}></Img>
                            {_edit(money, setMoney, 1, true)}
                        </div>
                    </div>
                    <div className={style.block} onClick={() => { active !== 2 ? setActive(2) : setActive(null) }}>
                        <div className={style.blockUp}>
                            产能:{makeCutter}
                            {_edit(makeCutter, setMakeCutter, 2)}
                        </div>
                        <div className={style.blockNumber}>
                            {cutter}<Img className={style.cutter}></Img>
                            {_edit(cutter, setCutter, 2)}
                        </div>
                    </div>
                    <div className={style.block} onClick={() => { active !== 3 ? setActive(3) : setActive(null) }}>
                        <div className={style.blockUp}>
                            产能:{makeOre}
                            {_edit(makeOre, setMakeOre, 3)}
                        </div>
                        <div className={style.blockNumber}>
                            {ore}<Img className={style.ore}></Img>
                            {_edit(ore, setOre, 3)}
                        </div>
                    </div>
                    <div className={style.block} onClick={() => { active !== 4 ? setActive(4) : setActive(null) }}>
                        <div className={style.blockUp}>
                            产能:{makeTree}
                            {_edit(makeTree, setMakeTree, 4)}
                        </div>
                        <div className={style.blockNumber}>
                            {tree}<Img className={style.tree}></Img>
                            {_edit(tree, setTree, 4, true)}
                        </div>
                    </div>
                    <div className={style.block} onClick={() => { active !== 5 ? setActive(5) : setActive(null) }}>
                        <div className={style.blockUp}>
                            产能:{makePower}
                            {_edit(makePower, setMakePower, 5)}
                        </div>
                        <div className={style.blockNumber}>
                            {power}<Img className={style.power}></Img>
                            {_edit(power, setPower, 5)}
                        </div>
                    </div>
                    <div className={style.block} onClick={() => { active !== 6 ? setActive(6) : setActive(null) }}>
                        <div className={style.blockUp}>
                            产能:{makeHot}
                            {_edit(makeHot, setMakeHot, 6)}
                        </div>
                        <div className={style.blockNumber}>
                            {hot}<Img className={style.hot}></Img>
                            {_edit(hot, setHot, 6, true)}
                        </div>
                    </div>
                </div>
                <div className={style.btns}>
                    <div className={style.btnEnd} onClick={() => { window.setMask(0) }}>回合结束</div>
                    <div className={style.btnEnd} onClick={() => { window.setMask(1) }}>数据重置</div>
                </div>
            </div>
            <Loading />
            <Mask make={{ score, makeMoney, makeCutter, makeOre, makeTree, makePower, makeHot }} change={{ time, setTime, money, setMoney, cutter, setCutter, ore, setOre, tree, setTree, power, setPower, hot, setHot }} />
            <Toast />
        </React.Fragment>
    )
}

export default Main