import type { NextPage } from 'next'
import b from '../../../pages/dashboard/dashBoard.module.scss'
import CurrencyComponent from './dashboardComponent/currencyComponent'

const BoardTop: NextPage = () => {
    return (
        <section className={b.boardMain__topWrapper}>
            <CurrencyComponent />
        </section>
    )
}

export default BoardTop
