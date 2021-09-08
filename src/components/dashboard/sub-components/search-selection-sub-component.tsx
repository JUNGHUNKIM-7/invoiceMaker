import type { NextPage } from 'next'
import b from '../styles/dashBoard.module.scss'
import React, { useState } from 'react'

const SearchSelectionSubComponent: NextPage = () => {
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')

    const yearGenerator = () => {
        const max = new Date().getFullYear()
        const min = max - 10
        const years = []

        for (let i = max; i >= min; i--) {
            years.push(i)
        }

        return years
    }

    //todo select!
    return (
        <div className={b.boardMain__topWrapper__search__selection}>
            <div
                className={b.boardMain__topWrapper__search__selection__from_to}
            >
                <div>
                    <span>
                        <label htmlFor="from">from</label>
                        <select
                            id="from"
                            name="month"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                        >
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                    </span>

                    <span>
                        <select
                            id="from"
                            name="year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            {yearGenerator().map((y, idx) => (
                                <React.Fragment key={idx}>
                                    <option>{y}</option>
                                </React.Fragment>
                            ))}
                        </select>
                    </span>
                </div>

                <div>
                    <span>
                        <label htmlFor="to">to</label>
                        <select
                            id="to"
                            name="month"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                        >
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                    </span>

                    <span>
                        <select
                            id="to"
                            name="year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            {yearGenerator().map((y, idx) => (
                                <React.Fragment key={idx}>
                                    <option>{y}</option>
                                </React.Fragment>
                            ))}
                        </select>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SearchSelectionSubComponent
