import type { NextPage } from 'next'
import b from '../../../../pages/dashboard/dashBoard.module.scss'
import { RiArrowDownSLine } from 'react-icons/ri'

const CurrencyComponent: NextPage = () => {
    return (
        <div className={b.boardMain__topWrapper__converterWrapper}>
            <div className={b.boardMain__topWrapper__converterWrapper__input}>
                <label>amount - ($)</label>
                <input type="text" />
            </div>

            <div
                className={b.boardMain__topWrapper__converterWrapper__selection}
            >
                <div
                    className={
                        b.boardMain__topWrapper__converterWrapper__selection__from
                    }
                >
                    <label htmlFor="from">from</label>
                    <button id="from">
                        <span>korea</span>
                        <RiArrowDownSLine />
                    </button>
                </div>

                <div
                    className={
                        b.boardMain__topWrapper__converterWrapper__selection__to
                    }
                >
                    <label htmlFor="to">to</label>
                    <button id="to">
                        <span>korea</span>
                        <RiArrowDownSLine />
                    </button>
                </div>
            </div>

            <button className={b.boardMain__topWrapper__converterWrapper__btn}>
                Switcher
            </button>

            <button className={b.boardMain__topWrapper__converterWrapper__btn}>
                Convert
            </button>
        </div>
    )
}

export default CurrencyComponent
