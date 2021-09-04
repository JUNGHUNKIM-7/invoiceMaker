import type { NextPage } from 'next'
import b from '../../../../pages/dashboard/dashBoard.module.scss'
import {
    HiDocumentAdd,
    HiDocumentReport,
    HiDocumentSearch,
} from 'react-icons/hi'
import {
    RiContactsBookFill,
    RiFileList3Fill,
    RiMoonClearLine,
    RiSunFill,
} from 'react-icons/ri'
import { FaShareAlt } from 'react-icons/fa'
import { IoIosContact } from 'react-icons/io'
import { useState } from 'react'
import { useRouting } from '../../../utils/route/routing'
import {
    GlobalActionEnum,
    UseGlobalReducer,
} from '../../../utils/reducer/globalState'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { endPoint } from '../../../utils/route/endPoints'

const NavComponent: NextPage = () => {
    const {
        // @ts-ignore
        state: { toggleTheme },
        // @ts-ignore
        dispatch,
    } = UseGlobalReducer()
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
                        {invoices.map((path) => (
                            <li
                                onClick={() =>
                                    routerPush(`/sales/invoices/${path}`)
                                }
                            >
                                {path.replaceAll('-', ' ')}
                            </li>
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
                        {quotes.map((path) => (
                            <li
                                onClick={() =>
                                    routerPush(`/sales/quotes/${path}`)
                                }
                            >
                                {path.replaceAll('-', ' ')}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
            <nav className={b.boardMain__navWrapper__navComponent}>
                <div className={b.boardMain__navWrapper__navComponent__top}>
                    <i>
                        <IoIosContact size={25} />
                    </i>
                    <p>user</p>
                    <button
                        className={
                            b.boardMain__navWrapper__navComponent__top__toggle
                        }
                        onClick={() =>
                            dispatch({ type: GlobalActionEnum.DARKMODE })
                        }
                    >
                        {toggleTheme ? (
                            <div>
                                <RiSunFill size={20} />
                            </div>
                        ) : (
                            <div>
                                <RiMoonClearLine size={20} />
                            </div>
                        )}
                    </button>
                </div>
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
