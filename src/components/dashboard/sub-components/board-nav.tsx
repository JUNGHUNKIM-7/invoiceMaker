import type { NextPage } from 'next'
import b from '../styles/dashBoard.module.scss'
import NavComponent from './nav-component'

const BoardNav: NextPage = () => {
    return (
        <section className={b.boardMain__navWrapper}>
            <NavComponent />
        </section>
    )
}

export default BoardNav
