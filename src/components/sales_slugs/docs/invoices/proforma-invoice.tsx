import type { NextPage } from 'next'
import HeaderSCPI from '../../docs-component/header-SC-PI'
import BodyInvoice from '../../docs-component/body-invoice'
import FooterInvoice from '../../docs-component/footer-invoice'

const ProformaInvoice: NextPage = () => {
    return (
        <div>
            <HeaderSCPI />
            <BodyInvoice />
            <FooterInvoice />
        </div>
    )
}

export default ProformaInvoice
