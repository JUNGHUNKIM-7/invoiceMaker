import React from 'react'
import type { NextPage } from 'next'
import b from '../styles/dashBoard.module.scss'
import { useState } from 'react'
import { useRouting } from '../../../utils/route/routing'
import {
    HiDocumentAdd,
    HiDocumentReport,
    HiDocumentSearch,
} from 'react-icons/hi'
import { RiContactsBookFill, RiFileList3Fill } from 'react-icons/ri'
import { FaShareAlt } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { endPoint } from '../../../utils/route/endPoints'

const NavComponent: NextPage = () => {
    const { routerPush } = useRouting()

    const [invoiceToggle, setInvoiceToggle] = useState(false)
    const [quoteToggle, setQuoteToggle] = useState(false)

    const {
        sales: {
            invoices: { data: invoices },
            quotes: { data: quotes },
            purchaseOrder,
        },
        products,
        contacts,
    } = endPoint

    return (
        <>
            {invoiceToggle && (
                <nav className={b.boardMain__navWrapper__hidden_nav}>
                    <div onClick={() => setInvoiceToggle((prev) => !prev)}>
                        <AiOutlineCloseCircle size={25} />
                    </div>
                    <ul>
                        {invoices.map((path, idx) => (
                            <React.Fragment key={idx}>
                                <li
                                    onClick={() =>
                                        routerPush(`/sales/invoices/${path}`)
                                    }
                                >
                                    {path.replaceAll('-', ' ')}
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </nav>
            )}
            {quoteToggle && (
                <nav className={b.boardMain__navWrapper__hidden_nav}>
                    <div onClick={() => setQuoteToggle((prev) => !prev)}>
                        <AiOutlineCloseCircle size={25} />
                    </div>
                    <ul>
                        {quotes.map((path, idx) => (
                            <React.Fragment key={idx}>
                                <li
                                    onClick={() =>
                                        routerPush(`/sales/quotes/${path}`)
                                    }
                                >
                                    {path.replaceAll('-', ' ')}
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </nav>
            )}
            <nav className={b.boardMain__navWrapper__navComponent}>
                <ul
                    className={
                        b.boardMain__navWrapper__navComponent__navi_lists
                    }
                >
                    <li onClick={() => setInvoiceToggle((prev) => !prev)}>
                        <i>
                            <HiDocumentAdd size={25} />
                        </i>
                        <a>invoices</a>
                    </li>

                    <li onClick={() => setQuoteToggle((prev) => !prev)}>
                        <i>
                            <HiDocumentReport size={25} />
                        </i>
                        <a>quotes</a>
                    </li>
                    <li
                        onClick={() =>
                            routerPush(`/sales/${purchaseOrder.data}`)
                        }
                    >
                        <i>
                            <HiDocumentSearch size={25} />
                        </i>
                        <a>purchase orders</a>
                    </li>
                    <li onClick={() => routerPush(`/${contacts.data}`)}>
                        <i>
                            <RiContactsBookFill size={25} />
                        </i>
                        <a>contacts</a>
                    </li>
                    <li onClick={() => routerPush(`/${products.data}`)}>
                        <i>
                            <RiFileList3Fill size={25} />
                        </i>
                        <a>products</a>
                    </li>
                    <li>
                        <i>
                            <FaShareAlt size={25} />
                        </i>
                        <a>share</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavComponent
