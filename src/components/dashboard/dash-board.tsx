import type { NextPage } from 'next'
import BoardNav from './sub-components/board-nav'
import BoardTop from './sub-components/board-top'
import BoardRecentCards from './sub-components/board-recent-cards'
import m from './styles/dash-board.module.scss'

const DashBoard: NextPage = () => {
    return (
        <section className={m.board}>
            <BoardNav />
            <BoardTop />
            <BoardRecentCards />
        </section>
    )
}

export default DashBoard
