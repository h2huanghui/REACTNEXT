import Head from 'next/head'

function Header() {
    return (
        <div>
            {/* 在每个页面上加上Head标签 */}
            <Head>
                <title>hui的blog</title>
                <meta charSet='utf-8'/>
            </Head>
            <div>SmartHui.com</div>
        </div>
        
    )
}

export default Header