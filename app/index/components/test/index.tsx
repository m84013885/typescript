import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"

import { useStore } from '../../../utils/stroe'

const Test = () => {
    const { fun } = useStore()
    return (
        <button onClick={() => { fun(5) }}>点击</button>
    )
}

export default Test