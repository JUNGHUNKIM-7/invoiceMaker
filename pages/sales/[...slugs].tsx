import type { NextPage } from 'next'
import { useRouting } from '../../src/utils/route/routing'
import Custom404 from '../404'
import PageController from '../../src/components/sales_slugs/page-controller'

const Sales: NextPage = () => {
    const { p } = useRouting()

    if (p && p[0] == 'invoices') {
        return <PageController title={'invoices'} />
    }
    if (p && p[0] == 'quotes') {
        return <PageController title={'quotes'} />
    }
    if (p && p[0] == 'purchase-order') {
        return <PageController title={'purchase-order'} />
    }

    return (
        <div>
            <Custom404 />
        </div>
    )
}

export default Sales
