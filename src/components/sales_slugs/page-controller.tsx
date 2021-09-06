import type { NextPage } from 'next'
import CommercialInvoice from './docs/invoices/commercial-invoice'
import ProformaInvoice from './docs/invoices/proforma-invoice'
import SalesContract from './docs/invoices/sales-contract'
import Quotation from './docs/quotes/quotation'
import RequestForQuotation from './docs/quotes/request-for-quotation'
import PurchaseOrder from './docs/purchase-order/purchase-order'
import PageControllerLayout from './page-controller-layout'
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

                <h3>{title}</h3>

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

            <h3>{p && p[1].replaceAll('-', ' ')}</h3>

            {p && p[1] === 'commercial-invoice' && <CommercialInvoice />}
            {p && p[1] === 'proforma-invoice' && <ProformaInvoice />}
            {p && p[1] === 'invoices-contract' && <SalesContract />}
            {p && p[1] === 'quotation' && <Quotation />}
            {p && p[1] === 'request-for-quotation' && <RequestForQuotation />}
        </PageControllerLayout>
    )
}

export default PageController
