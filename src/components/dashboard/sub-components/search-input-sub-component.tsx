import type { NextPage } from 'next'
import b from '../styles/dash-board.module.scss'
import React from 'react'
import { endPoint } from '../../../utils/route/endPoints'

const SearchInputSubComponent: NextPage = () => {
    const {
        sales: {
            invoices: { data: invoiceOptions },
            quotes: { data: quoteOptions },
            purchaseOrder,
        },
    } = endPoint

    return (
        <div className={b.board__topWrapper__search__input}>
            <div>
                <label htmlFor={'category'}>category</label>
                <input type={'text'} list={'category'} required />

                <datalist id={'category'}>
                    {invoiceOptions.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <option
                                value={`${item
                                    .replace('-', ' ')
                                    .toUpperCase()}`}
                            >
                                {item.replace('-', ' ').toUpperCase()}
                            </option>
                        </React.Fragment>
                    ))}

                    {quoteOptions.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <option
                                value={`${item
                                    .replace(/-/g, ' ')
                                    .toUpperCase()}`}
                            >
                                {item.replace(/-/g, ' ').toUpperCase()}
                            </option>
                        </React.Fragment>
                    ))}

                    <option
                        value={purchaseOrder.data
                            .replace('-', ' ')
                            .toUpperCase()}
                    >
                        {purchaseOrder.data.replace('-', ' ').toUpperCase()}
                    </option>
                </datalist>
            </div>

            <div>
                <label htmlFor={'search'}>search</label>
                <input type="text" id={'search'} />
            </div>
        </div>
    )
}

export default SearchInputSubComponent
