import type { NextPage } from 'next'
import { PageProps } from '../docs-router'
import Footer from './modules/footer'
import HeaderCi from './modules/header-CI'
import l from './docs-grid.module.scss'
import BodyCi from './modules/body-CI'

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
