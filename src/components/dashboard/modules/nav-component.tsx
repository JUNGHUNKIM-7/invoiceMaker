import React from 'react'
import type { NextPage } from 'next'
import b from '../dash-board.module.scss'
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
                <nav className={b.board__navWrapper__hidden_nav}>
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
                <nav className={b.board__navWrapper__hidden_nav}>
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
            <nav className={b.board__navWrapper__navComponent}>
                <ul className={b.board__navWrapper__navComponent__navi_lists}>
                    <li onClick={() => setInvoiceToggle((prev) => !prev)}>
                        <HiDocumentAdd size={25} />
                        <a>invoices</a>
                    </li>

                    <li onClick={() => setQuoteToggle((prev) => !prev)}>
                        <HiDocumentReport size={25} />
                        <a>quotes</a>
                    </li>
                    <li
                        onClick={() =>
                            routerPush(`/sales/${purchaseOrder.data}`)
                        }
                    >
                        <HiDocumentSearch size={25} />
                        <a>po</a>
                    </li>
                    <li onClick={() => routerPush(`/${contacts.data}`)}>
                        <RiContactsBookFill size={25} />
                        <a>contacts</a>
                    </li>
                    <li onClick={() => routerPush(`/${products.data}`)}>
                        <RiFileList3Fill size={25} />
                        <a>products</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavComponent
