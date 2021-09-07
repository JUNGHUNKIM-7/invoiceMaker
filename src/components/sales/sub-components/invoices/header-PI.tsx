import type { NextPage } from 'next'
import l from '../../invoices/styles/docs-grid.module.scss'

const HeaderPI: NextPage = () => {
    return (
        <div className={l.gridWrapper__pageBody__mainHeaderPI}>
            <section className={l.gridWrapper__pageBody__mainHeaderPI__left}>
                <div
                    className={
                        l.gridWrapper__pageBody__mainHeaderPI__left__header
                    }
                >
                    <label>seller</label>
                    <input />
                </div>

                <div
                    className={
                        l.gridWrapper__pageBody__mainHeaderPI__left__body
                    }
                >
                    <label>buyer</label>
                    <input />
                </div>

                <div
                    className={
                        l.gridWrapper__pageBody__mainHeaderPI__left__footer
                    }
                >
                    <article>
                        <div>
                            <label>method of dispatch</label>
                            <input />
                        </div>

                        <div>
                            <label>port of loading</label>
                            <input />
                        </div>
                    </article>

                    <article>
                        <div>
                            <label>type of shipment</label>
                            <input />
                        </div>

                        <div>
                            <label>port of discharge</label>
                            <input />
                        </div>
                    </article>
                </div>
            </section>

            <section className={l.gridWrapper__pageBody__mainHeaderPI__right}>
                <div
                    className={
                        l.gridWrapper__pageBody__mainHeaderPI__right__header
                    }
                >
                    <div
                        className={
                            l.gridWrapper__pageBody__mainHeaderPI__right__header__pages
                        }
                    >
                        <label>pages</label>
                        <p>1 of 1</p>
                    </div>

                    <div
                        className={
                            l.gridWrapper__pageBody__mainHeaderPI__right__header__flex
                        }
                    >
                        <div>
                            <label>invoice number</label>
                            <input />
                        </div>

                        <div>
                            <label>date</label>
                            <input />
                        </div>
                    </div>
                </div>

                <div
                    className={
                        l.gridWrapper__pageBody__mainHeaderPI__right__body
                    }
                >
                    <label>delivery date</label>
                    <input />
                </div>

                <div
                    className={
                        l.gridWrapper__pageBody__mainHeaderPI__right__footer
                    }
                >
                    <label>term / method of payment</label>
                    <div>
                        <textarea></textarea>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeaderPI
