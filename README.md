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