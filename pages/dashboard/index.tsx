import type { NextPage } from 'next'
import m from '../../src/components/dashboard/styles/dashBoard.module.scss'
import DashboardLayout from '../../src/components/dashboard/sub-components/dashboard-layout'
import Dashboard from '../../src/components/dashboard/dashboard'

const Index: NextPage = () => {
    return (
        <DashboardLayout>
            <main className={m.boardMain}>
                <Dashboard />
            </main>
        </DashboardLayout>
    )
}

export default Index
