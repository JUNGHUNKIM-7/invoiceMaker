import type { NextPage } from 'next'
import { useRouting } from '../../src/utils/route/routing'
import Custom404 from '../404'
import DocsRoute from '../../src/components/sales/docsRoute'

const Sales: NextPage = () => {
    const { p } = useRouting()

    if (p && p[0]) {
        return <DocsRoute page={p[0]} />
    }

    return (
        <div>
            <Custom404 />
        </div>
    )
}

export default Sales
