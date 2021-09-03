import type { NextPage } from 'next'
import b from '../../../pages/dashboard/dashBoard.module.scss'
import ResultComponent from './dashboardComponent/resultComponent'

const BoardResults: NextPage = () => {
    return (
        <section className={b.boardMain__resultWrapper}>
            <ResultComponent />
        </section>
    )
}

export default BoardResults
