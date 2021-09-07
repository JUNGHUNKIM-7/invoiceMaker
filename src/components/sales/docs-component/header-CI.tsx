import type { NextPage } from 'next'
import l from '../styles/docs-grid.module.scss'

const HeaderCi: NextPage = () => {
    return (
        <div className={l.gridWrapper__pageBody__mainHeaderCI}>
            <div className={l.gridWrapper__pageBody__mainHeaderCI__left}>
                <div
                    className={
                        l.gridWrapper__pageBody__mainHeaderCI__left__header
                    }
                >
                    <label>seller</label>
                    <input />
                </div>

                <div
                    className={
                        l.gridWrapper__pageBody__mainHeaderCI__left__body
                    }
                >
                    <label>buyer</label>
                    <input />
                </div>

                <div
                    className={
                        l.gridWrapper__pageBody__mainHeaderCI__left__footer
                    }
                >
                    <div>
                        <div>
                            <label>method of dispatch</label>
                            <input />
                        </div>

                        <div>
                            <label>port of loading</label>
                            <input />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>type of shipment</label>
                            <input />
                        </div>

                        <div>
                            <label>port of discharge</label>
                            <input />
                        </div>
                    </div>
                </div>
            </div>
            <div className={l.gridWrapper__pageBody__mainHeaderCI__right}>
                <div
                    className={
                        l.gridWrapper__pageBody__mainHeaderCI__right__header
                    }
                >
                    <div>
                        <label>pages</label>
                        <p>1 of 1</p>
                    </div>

                    <div
                        className={
                            l.gridWrapper__pageBody__mainHeaderCI__right__header__flex
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
                        l.gridWrapper__pageBody__mainHeaderCI__right__body
                    }
                >
                    <label>delivery date</label>
                    <input />
                </div>

                <div
                    className={
                        l.gridWrapper__pageBody__mainHeaderCI__right__footer
                    }
                >
                    <label>term / method of payment</label>
                    <div>
                        <textarea>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderCi
