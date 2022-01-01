import type { NextPage } from 'next'
import BoardNav from '../components/dashboard/board-nav'
import BoardRecentCards from '../components/dashboard/board-recent-cards'
import BoardTop from '../components/dashboard/board-top'

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
