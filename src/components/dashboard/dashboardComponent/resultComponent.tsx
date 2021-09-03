import type { NextPage } from 'next'
import b from '../../../../pages/dashboard/dashBoard.module.scss'

const ResultComponent: NextPage = () => {
    return (
        <>
            <div className={b.boardMain__resultWrapper__ref}>
                <p>mid-market price</p>
                <p>
                    1 <span>usd</span> = 0.888888 <span>eur</span>
                </p>

                <p>
                    1 <span>eur</span> = 0.888888 <span>usd</span>
                </p>
            </div>

            <div className={b.boardMain__resultWrapper__result}>
                <p>
                    1,000,000.00 <span>us dollars</span>
                </p>
                <p>
                    8,444,958,68 <span>euros</span>
                </p>
            </div>

            <div className={b.boardMain__resultWrapper__last_updated}>
                <p>last updated</p>
                <p>
                    <span>sep 2, 2021</span>
                    <span>05:22 utc</span>
                </p>
            </div>
        </>
    )
}

export default ResultComponent
