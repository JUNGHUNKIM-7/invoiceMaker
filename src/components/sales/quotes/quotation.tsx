import type { NextPage } from 'next'
import { PageProps } from '../docsRoute'
import l from '../styles/docs-grid.module.scss'

const Quotation: NextPage<Pick<PageProps, 'title'>> = ({ title }) => {
    return (
        <h3 className={l.gridWrapper__title}>{title?.replaceAll('-', ' ')}</h3>
    )
}

export default Quotation
