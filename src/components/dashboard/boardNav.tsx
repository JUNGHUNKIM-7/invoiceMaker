import type { NextPage } from 'next'
import b from '../../../pages/dashboard/dashBoard.module.scss'
import NavComponent from './dashboardComponent/navComponent'

const BoardNav: NextPage = () => {
    // @ts-ignore
    return (
        <section className={b.boardMain__navWrapper}>
            <NavComponent />
        </section>
    )
}

export default BoardNav
