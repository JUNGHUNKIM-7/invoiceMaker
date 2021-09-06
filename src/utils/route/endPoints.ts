export const endPoint = {
    // /invoices/invoice/[data]
    sales: {
        invoices: {
            data: [
                'commercial-invoice',
                'proforma-invoice',
                'invoices-contract',
            ],
        },
        quotes: {
            data: ['quotation', 'request-for-quotation'],
        },
        purchaseOrder: {
            data: 'purchase-order',
        },
    },
    // /contacts
    contacts: {
        data: 'contacts',
    },
    // /products
    products: {
        data: 'products',
    },
}
