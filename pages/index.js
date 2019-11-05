import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import MyHeader from '../components/myheader'

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
    Router.events.on('routeChangeStart', (...args) => {
        console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
    })

    Router.events.on('routeChangeComplete', (...args) => {
        console.log('2.routeChangeComplete->路由结束变化,参数为:',...args)
    })

    Router.events.on('beforeHistoryChange', (...args) => {
        console.log('3.beforeHistoryChange->在改变浏览器 history之前触发,参数为:',...args)
    })

    Router.events.on('routeChangeError', (...args) => {
        console.log('4.routeChangeError->跳转发生错误,参数为:',...args)
    })

    Router.events.on('hashChangeStart', (...args) => {
        console.log('5.hashChangeStart->hash跳转开始执行,参数为:',...args)
    })

    Router.events.on('hashChangeComplete', (...args) => {
        console.log('6.hashChangeComplete->hash跳转完成时,参数为:',...args)
    })
    

    function gotoPlan() {
        // Router.push('/plan?name=react') //优化如下
        Router.push({
            pathname: '/plan',
            query: {
                name:'react'
            }
        })
    }

    return (
        <div>
            <MyHeader />
            <div>我是首页</div>
            <div>
                <Link href={{ pathname: '/plan', query: {name:'react'}}}><a>学习React</a></Link>
                <br />
                <Link href='/plan?name=en'><a>学习English</a></Link>
                <br />
                <button onClick={gotoPlan}>学习react</button>
                <div>
                    <Link href='#exercise'><a href="">EXERCISE</a></Link>
                </div>
            </div>
            {/* <div><Link href='/smartHuiA'><a>去SmartHuiA页面</a></Link></div>
            <div><Link href='/smartHuiB'><a>去SmartHuiB页面</a></Link></div>
            <div>
                <button onClick={gotoA}>去SmartHuiA页面</button>
            </div> */}
        </div>
    )
}
export default Home