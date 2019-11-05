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
```