import type { NextPage } from 'next'
import { useRouting } from '../../src/utils/route/routing'
import Invoices from '../../src/components/pages/sales/invoices'
import Quotes from '../../src/components/pages/quotes/quotes'
import Custom404 from '../404'
import PurchaseOrders from '../../src/components/pages/purchaseOrder/purchaseOrders'

const Sales: NextPage = () => {
    const { p } = useRouting()

    if (p && p[0] == 'invoices') {
        return <Invoices />
    }
    if (p && p[0] == 'quotes') {
        return <Quotes />
    }
    if (p && p[0] == 'purchase-order') {
        return <PurchaseOrders />
    }

    return (
        <div>
            <Custom404 />
        </div>
    )
}

export default Sales
