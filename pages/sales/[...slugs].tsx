import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Invoices from '../../src/components/pages/sales/invoices'
import Quotes from '../../src/components/pages/quotes/quotes'
import Custom404 from '../404'
import PurchaseOrders from '../../src/components/pages/purchaseOrder/purchaseOrders'

const Sales: NextPage = () => {
    const router = useRouter()
    const p = router.query.slugs

    if (p && p[0] == 'invoicePages') {
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
