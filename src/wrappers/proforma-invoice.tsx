import type { NextPage } from 'next'
import BodyPI from '../components/docs/body-PI'
import Footer from '../components/docs/footer'
import HeaderPI from '../components/docs/header-PI'

import l from './docs-grid.module.scss'
import { PageProps } from './page_router'

const ProformaInvoice: NextPage<Pick<PageProps, 'title'>> = ({ title }) => {
    return (
        <div className={l.gridWrapper}>
            <h3 className={l.gridWrapper__title}>
                {title?.replaceAll('-', ' ')}
            </h3>

            <div className={l.gridWrapper__pageBody}>
                <HeaderPI />
                <BodyPI />
                <Footer />
            </div>
        </div>
    )
}

export default ProformaInvoice
