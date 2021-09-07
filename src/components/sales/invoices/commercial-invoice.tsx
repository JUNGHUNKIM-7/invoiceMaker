import type { NextPage } from 'next'
import { PageProps } from '../docsRoute'
import Footer from '../sub-components/invoices/footer'
import HeaderCi from '../sub-components/invoices/header-CI'
import Body from '../sub-components/invoices/body'
import l from './styles/docs-grid.module.scss'

const CommercialInvoice: NextPage<Pick<PageProps, 'title'>> = ({ title }) => {
    return (
        <div className={l.gridWrapper}>
            <h3 className={l.gridWrapper__title}>
                {title?.replaceAll('-', ' ')}
            </h3>
            <div className={l.gridWrapper__pageBody}>
                <HeaderCi />
                <Body />
                <Footer />
            </div>
        </div>
    )
}

export default CommercialInvoice
