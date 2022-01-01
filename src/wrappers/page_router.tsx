import type { NextPage } from 'next'
import CommercialInvoice from './commercial-invoice'
import Quotation from '../components/docs/quotation'
import PurchaseOrder from '../components/docs/purchase-order'
import DocsLayout from './docs-layout'
import ProformaInvoice from './proforma-invoice'
import SalesContract from './sales-contract'
import RequestForQuotation from '../components/docs/request-for-quotation'
import { useRouting } from '../utils/routing'


export interface PageProps {
    page: string
    title: string | undefined
}

const PageRouter: NextPage<Pick<PageProps, 'page'>> = ({ page }) => {
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

export default PageRouter
