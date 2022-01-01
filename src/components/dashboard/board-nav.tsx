import type { NextPage } from 'next'
import b from '../../wrappers/dash-board.module.scss'
import NavComponent from './nav-component'

const BoardNav: NextPage = () => {
    return (
        <section className={b.board__navWrapper}>
            <NavComponent />
        </section>
    )
}

export default BoardNav
