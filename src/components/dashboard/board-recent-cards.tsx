import type { NextPage } from 'next'
import b from './styles/dashBoard.module.scss'
import CardComponent from './sub-components/card-component'

const BoardRecentCards: NextPage = () => {
    return (
        <section className={b.boardMain__cardWrapper}>
            {/*elem 10 ++ scroll ?*/}
            <h4>bookmark</h4>
            <div className={b.boardMain__cardWrapper__cardComponents}>
                <CardComponent />
            </div>
        </section>
    )
}

export default BoardRecentCards
