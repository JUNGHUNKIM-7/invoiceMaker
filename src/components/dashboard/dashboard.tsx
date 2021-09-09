import type { NextPage } from 'next'
import BoardNav from './sub-components/board-nav'
import BoardTop from './sub-components/board-top'
import BoardRecentCards from './sub-components/board-recent-cards'

const Dashboard: NextPage = () => {
    return (
        <>
            <BoardNav />
            <BoardTop />
            <BoardRecentCards />
        </>
    )
}

export default Dashboard
