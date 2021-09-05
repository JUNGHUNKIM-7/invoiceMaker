import type { NextPage } from 'next'
import React from 'react'
import b from '../../../../pages/dashboard/dashBoard.module.scss'

const CardComponent: NextPage = () => {
    const testData = [
        {
            category: 'category1',
            title: 'invoice1',
            date: 'date1',
        },
        {
            category: 'category2',
            title: 'purchase invoice2',
            date: 'date2',
        },
        {
            category: 'category3',
            title: 'sales contract',
            date: 'date3',
        },
        {
            category: 'category4',
            title: 'invoice2',
            date: 'date4',
        },
        {
            category: 'category5',
            title: 'invoice3',
            date: 'date5',
        },
    ]

    return (
        <>
            {testData.map(({ category, title, date }, idx) => (
                <article
                    className={
                        b.boardMain__cardWrapper__cardComponents__cardComponent
                    }
                >
                    <div>
                        <span>{title}</span>
                        <span>{category}</span>
                    </div>

                    <p>Lorem ipsum dolor sit amet</p>

                    <p>{date}</p>
                </article>
            ))}
        </>
    )
}

export default CardComponent
