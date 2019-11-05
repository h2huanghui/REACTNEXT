import { withRouter } from 'next/router' //withRouter是Next.js框架的高级组件,用来处理路由用的。通过这种方式就获得了参数,并显示在页面上
import Link from 'next/link'
import axios from 'axios'

const Plan = ({ router,list }) => {
    return (
        <div>
            <div>learn {router.query.name}</div>
            {
                list.map((item,index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
            <Link href='/'><a>返回首页</a></Link>
        </div>
    )
}

Plan.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
            console.log('远程数据结果:', res)
            resolve(res.data.data)
        })
    })
    return await promise
}

export default withRouter(Plan) //withRouter进行接收