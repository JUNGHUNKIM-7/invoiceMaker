import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import CommercialInvoice from './sales/invoicePages/commercial-invoice'
import ProformaInvoice from './sales/invoicePages/proforma-invoice'
import SalesContract from './sales/invoicePages/sales-contract'
import Quotation from './quotes/quotation'
import RequestForQuotation from './quotes/request-for-quotation'
import PurchaseOrder from './purchaseOrder/purchase-order'

interface props {
    title: string
}

const PageController: NextPage<props> = ({ title }) => {
    const router = useRouter()
    const p = router.query.slugs
    console.log(p)

    if (title !== 'invoicePages' && title !== 'quotes') {
        return (
            <div>
                <nav>
                    <label>Search</label>
                    <input />
                    <ul>
                        <li>logout</li>
                    </ul>
                </nav>

                <h1>{title}</h1>

                <PurchaseOrder />
            </div>
        )
    }

    return (
        <div>
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
        </div>
    )
}

export default PageController
