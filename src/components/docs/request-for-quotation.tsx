import type { NextPage } from 'next'
import l from '../../wrappers/docs-grid.module.scss'
import { PageProps } from '../../wrappers/page_router'

const RequestForQuotation: NextPage<Pick<PageProps, 'title'>> = ({ title }) => {
    return (
        <h3 className={l.gridWrapper__title}>{title?.replaceAll('-', ' ')}</h3>
    )
}

export default RequestForQuotation
