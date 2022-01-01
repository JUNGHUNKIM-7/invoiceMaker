import type { NextPage } from 'next'
import b from '../../wrappers/dash-board.module.scss'
import SearchComponent from './search-component'

const BoardTop: NextPage = () => {
    return (
        <section className={b.board__topWrapper}>
            <SearchComponent />
        </section>
    )
}

export default BoardTop
