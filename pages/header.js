import Head from 'next/head'
import '../static/test.css'
import { Button } from 'antd'

function Header() {
    return (
        <div>
            {/* 在每个页面上加上Head标签 */}
            <Head>
                <title>hui的blog</title>
                <meta charSet='utf-8'/>
            </Head>
            <div>SmartHui.com</div>
            <Button>Btn</Button>
        </div>
        
    )
}

export default Header