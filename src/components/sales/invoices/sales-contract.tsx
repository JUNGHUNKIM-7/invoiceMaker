import type { NextPage } from 'next'
import HeaderPI from '../docs-component/header-PI'
import Body from '../docs-component/body'
import Footer from '../docs-component/footer'
import { PageProps } from '../docsRoute'
import l from '../styles/docs-grid.module.scss'

const SalesContract: NextPage<Pick<PageProps, 'title'>> = ({ title }) => {
    return (
        <div className={l.gridWrapper}>
            <h3 className={l.gridWrapper__title}>
                {title?.replaceAll('-', ' ')}
            </h3>
            <HeaderPI />
            <Body />
            <Footer />
        </div>
    )
}

export default SalesContract
