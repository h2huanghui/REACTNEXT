import React, { useState } from 'react'
import dynamic from 'next/dynamic'
// import moment from 'moment'

const One = dynamic(import('../components/one'))

function Time() {
    const [nowTime, setTime] = useState(Date.now())
    const changeTime = async () => { //把方法变成异步模式
        const moment = await import('moment') //等待moment加载完成
        setTime(moment.default(Date.now()).format())  //注意使用default
    }
    return (
        <div>
            <div>显示时间为{nowTime}</div>
            <One />
            <button onClick={changeTime}>ChangeTime</button>
        </div>
    )
}

export default Time