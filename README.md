# 脚手架安装
## 1. npx create-next-app next-create

## 2. npm run dev

## 3. pages文件夹下,新建页面和访问路径

## 4. components目录下,Component组件

## 5. 页面跳转
方式1：`<Link>`  <br>

```
import Link from 'next/link'
<Link href='/'><a>返回首页</a></Link>
```
方式2：js编程的方式 
```
Router.push('/smartHuiA')
```
## 6. query传递参数和接收参数
Next.js中只能通过query(?id=1)来传递参数,不能通过path:id的形式传入参数<br>
withRouter接收router

## 7. 路由-六个钩子事件的讲解
```
routeChangeStart 路由发生变化时
routeChangeComplete 路由结束变化时
beforeHistoryChange 浏览器history触发前
routeChangeError 跳转发生错误
hashChangeStart  hash跳转开始执行
hashChangeComplete hash跳转完成时
```

## 8. getInitialProps获取远端数据

## 9. style JSX
```
    <style jsx>
        {`
            div {
                color:${color}
            }
        `}
    </style>
```

## 10. 模块加载LazyLoading (moment.js)
```
 const changeTime = async () => { //把方法变成异步模式
    const moment = await import('moment') //等待moment加载完成
    setTime(moment.default(Date.now()).format())  //注意使用default
}
```
自定义组件懒加载
```
const One = dynamic(import('../components/one'))
```
