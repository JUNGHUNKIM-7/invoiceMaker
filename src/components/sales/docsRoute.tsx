import type { NextPage } from 'next'
import { useRouting } from '../../utils/route/routing'
import CommercialInvoice from './invoices/commercial-invoice'
import ProformaInvoice from './invoices/proforma-invoice'
import SalesContract from './invoices/sales-contract'
import Quotation from './quotes/quotation'
import RequestForQuotation from './quotes/request-for-quotation'
import PurchaseOrder from './purchase-order/purchase-order'
import DocsLayout from './docs-component/docs-layout'

export interface PageProps {
    page: string
    title: string | undefined
}

const DocsRoute: NextPage<Pick<PageProps, 'page'>> = ({ page }) => {
    const { p } = useRouting()

    if (page !== 'invoices' && page !== 'quotes') {
        return (
            <DocsLayout>
                <PurchaseOrder title={p?.[0]} />
            </DocsLayout>
        )
    }

    return (
        <DocsLayout>
            {p && p[1] === 'commercial-invoice' && (
                <CommercialInvoice title={p?.[1]} />
            )}
            {p && p[1] === 'proforma-invoice' && (
                <ProformaInvoice title={p?.[1]} />
            )}
            {p && p[1] === 'sales-contract' && <SalesContract title={p?.[1]} />}
            {p && p[1] === 'quotation' && <Quotation title={p?.[1]} />}
            {p && p[1] === 'request-for-quotation' && (
                <RequestForQuotation title={p?.[1]} />
            )}
        </DocsLayout>
    )
}

export default DocsRoute
