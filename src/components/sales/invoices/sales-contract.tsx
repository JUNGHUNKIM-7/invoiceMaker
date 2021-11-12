import type { NextPage } from 'next'
import HeaderPI from './modules/header-PI'
import BodyPI from './modules/body-PI'
import Footer from './modules/footer'
import { PageProps } from '../docs-router'
import l from './docs-grid.module.scss'

const SalesContract: NextPage<Pick<PageProps, 'title'>> = ({ title }) => {
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

export default SalesContract
