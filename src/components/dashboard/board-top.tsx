import type { NextPage } from 'next'
import b from '../../../pages/dashboard/dashBoard.module.scss'
import SearchComponent from './dashboardComponent/search-component'

const BoardTop: NextPage = () => {
    return (
        <section className={b.boardMain__topWrapper}>
            <SearchComponent />
        </section>
    )
}

export default BoardTop
