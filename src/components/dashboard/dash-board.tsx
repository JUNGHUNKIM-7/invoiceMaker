import type { NextPage } from 'next'
import BoardNav from './modules/board-nav'
import BoardTop from './modules/board-top'
import BoardRecentCards from './modules/board-recent-cards'
import m from './dash-board.module.scss'

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
