import type { NextPage } from 'next'
import b from './styles/dashBoard.module.scss'
import SearchComponent from './sub-components/search-component'

const BoardTop: NextPage = () => {
    return (
        <section className={b.boardMain__topWrapper}>
            <SearchComponent />
        </section>
    )
}

export default BoardTop
