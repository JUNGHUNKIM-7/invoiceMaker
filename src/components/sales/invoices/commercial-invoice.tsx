import type { NextPage } from 'next'
import { PageProps } from '../docsRoute'
import Footer from '../docs-component/footer'
import HeaderCi from '../docs-component/header-CI'
import Body from '../docs-component/body'
import l from '../styles/docs-grid.module.scss'

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
