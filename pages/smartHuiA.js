
import React, { useState } from 'react'
import Link from 'next/link'

export default () => {
    const [color, setColor] = useState('blue')
    const changeColor = () => {
        setColor(color == 'blue' ? 'red' :'blue')
    }
    return (
        <div>
            <div>SmartHui-A page</div>
            <div>
                <button onClick={changeColor}>ChangeColor</button>
            </div>
            <Link href='/'>
                <a>
                    <span>返回首页</span>
                    <span>Icon</span>
                </a>
            </Link>

            <style jsx>
                {`
                div {
                    color:${color}
                }
            `}
            </style>
        </div>
    )
}
