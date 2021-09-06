import type { NextPage } from 'next'
import React, { useState } from 'react'
import b from './styles/dashBoard.module.scss'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

const CardComponent: NextPage = () => {
    const [toggleBookMark, setToggleBookMark] = useState(false)

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
            title: 'invoices contract',
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
                <React.Fragment key={idx}>
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

                        <div onClick={() => setToggleBookMark((prev) => !prev)}>
                            {toggleBookMark ? (
                                <AiFillStar size={20} />
                            ) : (
                                <AiOutlineStar size={20} />
                            )}
                        </div>
                    </article>
                </React.Fragment>
            ))}
        </>
    )
}

export default CardComponent
