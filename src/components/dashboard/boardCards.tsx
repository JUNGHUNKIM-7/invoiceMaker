import type { NextPage } from 'next'
import CardComponent from './dashboardComponent/cardComponent'
import b from '../../../pages/dashboard/dashBoard.module.scss'

const BoardCards: NextPage = () => {
    return (
        <section className={b.boardMain__cardWrapper}>
            <h4>recent drafts</h4>
            <div className={b.boardMain__cardWrapper__cardComponents}>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </div>
        </section>
    )
}

export default BoardCards
