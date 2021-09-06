import type { NextPage } from 'next'
import FooterInvoice from '../../docs-component/footer-invoice'
import HeaderCi from '../../docs-component/header-CI'
import BodyInvoice from '../../docs-component/body-invoice'

const CommercialInvoice: NextPage = () => {
    return (
        <div>
            <HeaderCi />
            <BodyInvoice />
            <FooterInvoice />
        </div>
    )
}

export default CommercialInvoice
