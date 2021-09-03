import type { NextPage } from 'next'
import b from '../../../../pages/dashboard/dashBoard.module.scss'
import {
    HiDocumentAdd,
    HiDocumentReport,
    HiDocumentSearch,
} from 'react-icons/hi'
import { RiContactsBookFill, RiFileList3Fill } from 'react-icons/ri'
import { FaShareAlt } from 'react-icons/fa'
import { IoIosContact } from 'react-icons/io'
import { useRouter } from 'next/router'
import { useState } from 'react'

const NavComponent: NextPage = () => {
    const [openInvoices, setOpenInvoices] = useState(false)
    const [openQuotes, setOpenQuotes] = useState(false)
    // const [openPurchaseOrder, setOpenPurchaseOrder] = useState(false)

    const router = useRouter()
    const routerPush = (path: string) => {
        router.push({ pathname: `/${path}` })
    }
    return (
        <nav className={b.boardMain__navWrapper__navComponent}>
            <div>
                <i>
                    <IoIosContact size={25} />
                </i>
                <p>user</p>
            </div>
            <ul>
                <li onClick={() => setOpenInvoices((prev) => !prev)}>
                    <i>
                        <HiDocumentAdd size={25} />
                    </i>
                    <a>invoices</a>
                    {openInvoices && (
                        <ul>
                            <li
                                onClick={() =>
                                    routerPush(
                                        'sales/invoicePages/commercial-invoice'
                                    )
                                }
                            >
                                invoices
                            </li>
                            <li
                                onClick={() =>
                                    routerPush(
                                        'sales/invoicePages/proforma-invoice'
                                    )
                                }
                            >
                                proforma invoice
                            </li>
                            <li
                                onClick={() =>
                                    routerPush(
                                        'sales/invoicePages/sales-contract'
                                    )
                                }
                            >
                                sales contract
                            </li>
                        </ul>
                    )}
                </li>
                <li onClick={() => setOpenQuotes((prev) => !prev)}>
                    <i>
                        <HiDocumentReport size={25} />
                    </i>
                    <a>quotes</a>
                    {openQuotes && (
                        <ul>
                            <li
                                onClick={() =>
                                    routerPush('sales/quotes/quotation')
                                }
                            >
                                quotation
                            </li>
                            <li
                                onClick={() =>
                                    routerPush(
                                        'sales/quotes/request-for-quotation'
                                    )
                                }
                            >
                                request for quotation
                            </li>
                        </ul>
                    )}
                </li>
                <li onClick={() => routerPush('sales/purchase-order')}>
                    <i>
                        <HiDocumentSearch size={25} />
                    </i>
                    <a>purchase orders</a>
                </li>
                <li onClick={() => routerPush('contacts')}>
                    <i>
                        <RiContactsBookFill size={25} />
                    </i>
                    <a>contacts</a>
                </li>
                <li onClick={() => routerPush('products')}>
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
    )
}

export default NavComponent
