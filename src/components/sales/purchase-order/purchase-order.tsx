import type { NextPage } from 'next'
import { PageProps } from '../docs-router'
import l from '../invoices/docs-grid.module.scss'

const PurchaseOrder: NextPage<Pick<PageProps, 'title'>> = ({ title }) => {
    return (
        <h3 className={l.gridWrapper__title}>{title?.replaceAll('-', ' ')}</h3>
    )
}

export default PurchaseOrder
