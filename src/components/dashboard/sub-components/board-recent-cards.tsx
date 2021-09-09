import type { NextPage } from 'next'
import b from '../styles/dash-board.module.scss'
import CardComponent from './card-component'

const BoardRecentCards: NextPage = () => {
    return (
        <section className={b.board__cardWrapper}>
            {/* todo elem scroll*/}
            <h4>bookmark</h4>
            <div className={b.board__cardWrapper__cardComponents}>
                <CardComponent />
            </div>
        </section>
    )
}

export default BoardRecentCards
