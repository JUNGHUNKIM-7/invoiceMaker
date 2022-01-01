import type { NextPage } from 'next'
import { PageProps } from './page_router'
import l from './docs-grid.module.scss'
import HeaderCi from '../components/docs/header-CI'
import BodyCi from '../components/docs/body-CI'
import Footer from '../components/docs/footer'

const CommercialInvoice: NextPage<Pick<PageProps, 'title'>> = ({ title }) => {
    return (
        <div className={l.gridWrapper}>
            <h3 className={l.gridWrapper__title}>
                {title?.replaceAll('-', ' ')}
            </h3>
            <div className={l.gridWrapper__pageBody}>
                <HeaderCi />
                <BodyCi />
                <Footer />
            </div>
        </div>
    )
}

export default CommercialInvoice
