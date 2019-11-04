import { withRouter } from 'next/router' //withRouter是Next.js框架的高级组件,用来处理路由用的。通过这种方式就获得了参数,并显示在页面上
import Link from 'next/link'

const Plan = ({ router }) => {
    return (
        <div>
            <div>learn {router.query.name}</div>
            <Link href='/'><a>返回首页</a></Link>
        </div>
    )
}

export default withRouter(Plan) //withRouter进行接收