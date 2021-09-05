import type { NextPage } from 'next'
import b from '../../../pages/dashboard/dashBoard.module.scss'
import CardComponent from './dashboardComponent/card-component'

const BoardRecentCards: NextPage = () => {
    return (
        <section className={b.boardMain__cardWrapper}>
            {/*elem 10 ++ scroll ?*/}
            <h4>drafts</h4>
            <div className={b.boardMain__cardWrapper__cardComponents}>
                <CardComponent />
            </div>
        </section>
    )
}

export default BoardRecentCards
