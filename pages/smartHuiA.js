import Link from 'next/link'

export default () => (
    <div>
        <div>SmartHui-A page</div>
        <Link href='/'>
            <a>
                <span>返回首页</span>
                <span>Icon</span>
            </a>
        </Link>
    </div>
)