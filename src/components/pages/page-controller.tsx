import type { NextPage } from 'next'
import CommercialInvoice from './sales/invoices-sub/commercial-invoice'
import ProformaInvoice from './sales/invoices-sub/proforma-invoice'
import SalesContract from './sales/invoices-sub/sales-contract'
import Quotation from './quotes/quotes-sub/quotation'
import RequestForQuotation from './quotes/quotes-sub/request-for-quotation'
import PurchaseOrder from './purchase-order/purchase-sub/purchase-order'
import PageControllerLayout from '../layout-theme/page-controller-layout'
import { useRouting } from '../../utils/route/routing'

interface props {
    title: string
}

//button.
const PageController: NextPage<props> = ({ title }) => {
    const { p } = useRouting()

    if (title !== 'invoices' && title !== 'quotes') {
        return (
            <PageControllerLayout>
                <nav>
                    <label>Search</label>
                    <input />
                    <ul>
                        <li>logout</li>
                    </ul>
                </nav>

                <h1>{title}</h1>

                <PurchaseOrder />
            </PageControllerLayout>
        )
    }

    return (
        <PageControllerLayout>
            <nav>
                <label>Search</label>
                <input />
                <ul>
                    <li>logout</li>
                </ul>
            </nav>

            <h1>{p && p[1]}</h1>

            {p && p[1] === 'commercial-invoice' && <CommercialInvoice />}
            {p && p[1] === 'proforma-invoice' && <ProformaInvoice />}
            {p && p[1] === 'sales-contract' && <SalesContract />}
            {p && p[1] === 'quotation' && <Quotation />}
            {p && p[1] === 'request-for-quotation' && <RequestForQuotation />}
        </PageControllerLayout>
    )
}

export default PageController
