import type { NextPage } from 'next'
import CommercialInvoice from './sales/invoicePages/commercial-invoice'
import ProformaInvoice from './sales/invoicePages/proforma-invoice'
import SalesContract from './sales/invoicePages/sales-contract'
import Quotation from './quotes/quotation'
import RequestForQuotation from './quotes/request-for-quotation'
import PurchaseOrder from './purchaseOrder/purchase-order'
import PageControllerLayout from './pageControllerLayout'
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
