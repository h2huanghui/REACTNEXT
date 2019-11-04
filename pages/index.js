import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

/* const Home = () => (
    <div>
        <div>我是首页</div>
        <div><Link href='/smartHuiA'><a>去SmartHuiA页面</a></Link></div>
        <div><Link href='/smartHuiB'><a>去SmartHuiB页面</a></Link></div>
        <div>
            <button onClick={() => { Router.push('/smartHuiA') }}>去SmartHuiA页面</button>
        </div>
    </div>
) */

const Home = () => {
    function gotoA() {
        Router.push('/smartHuiA')
    }
    return (
        <div>
            <div>我是首页</div>
            <div><Link href='/smartHuiA'><a>去SmartHuiA页面</a></Link></div>
            <div><Link href='/smartHuiB'><a>去SmartHuiB页面</a></Link></div>
            <div>
                <button onClick={gotoA}>去SmartHuiA页面</button>
            </div>
        </div>
    )
}
export default Home