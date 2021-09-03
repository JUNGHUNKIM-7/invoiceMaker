import type { NextPage } from 'next'
import m from './dashBoard.module.scss'
import BoardNav from '../../src/components/dashboard/boardNav'
import BoardTop from '../../src/components/dashboard/boardTop'
import BoardResults from '../../src/components/dashboard/boardResults'
import BoardCards from '../../src/components/dashboard/boardCards'

const Index: NextPage = () => {
    return (
        <main className={m.boardMain}>
            <BoardNav />
            <BoardTop />
            <BoardResults />
            <BoardCards />
        </main>
    )
}

export default Index
