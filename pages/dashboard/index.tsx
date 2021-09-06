import type { NextPage } from 'next'
import m from '../../src/components/root_dashboard/styles/dashBoard.module.scss'
import BoardNav from '../../src/components/root_dashboard/board-nav'
import BoardTop from '../../src/components/root_dashboard/board-top'
import BoardRecentCards from '../../src/components/root_dashboard/board-recent-cards'
import DashboardLayout from '../../src/components/root_dashboard/dashboard-layout'

const Index: NextPage = () => {
    return (
        <DashboardLayout>
            <main className={m.boardMain}>
                <BoardNav />
                <BoardTop />
                <BoardRecentCards />
            </main>
        </DashboardLayout>
    )
}

export default Index
