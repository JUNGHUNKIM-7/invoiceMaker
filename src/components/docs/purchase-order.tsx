import type { NextPage } from 'next'
import { PageProps } from '../../wrappers/page_router'
import l from '../../wrappers/docs-grid.module.scss'

const PurchaseOrder: NextPage<Pick<PageProps, 'title'>> = ({ title }) => {
    return (
        <h3 className={l.gridWrapper__title}>{title?.replaceAll('-', ' ')}</h3>
    )
}

export default PurchaseOrder
