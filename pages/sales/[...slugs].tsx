import type { NextPage } from 'next'
import Custom404 from '../404'
import PageRouter from '../../src/wrappers/page_router'
import { useRouting } from '../../src/utils/routing'

const Sales: NextPage = () => {
    const { p } = useRouting()

    if (!p) {
        return <Custom404 />
    }

    return <PageRouter page={p[0]} />
}

export default Sales
