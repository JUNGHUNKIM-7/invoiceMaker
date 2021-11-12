import type { NextPage } from 'next'
import { useRouting } from '../../src/utils/route/routing'
import Custom404 from '../404'
import DocsRouter from '../../src/components/sales/docs-router'

const Sales: NextPage = () => {
    const { p } = useRouting()

    if (!p) {
        return <Custom404 />
    }

    return <DocsRouter page={p[0]} />
}

export default Sales
