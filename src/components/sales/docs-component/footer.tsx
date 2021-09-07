import type { NextPage } from 'next'
import l from '../styles/docs-grid.module.scss'

const Footer: NextPage = () => {
    return (
        <div className={l.gridWrapper__pageBody__footer}>
            <section className={l.gridWrapper__pageBody__footer__left}>
                <div>
                    <label>conditions</label>
                    <textarea></textarea>
                </div>
                <div>
                    <label>bank details</label>
                    <textarea></textarea>
                </div>
            </section>

            <section className={l.gridWrapper__pageBody__footer__right}>
                <div>
                    <label>add change or discount</label>
                    <input />
                </div>

                <div>
                    <label>add tax</label>
                    <input />
                </div>

                <div>
                    <label>total :</label>
                    <input />
                </div>

                <div>
                    <div>
                        <label>incoterms 2020</label>
                        <input />
                    </div>

                    <div>
                        <label>currency</label>
                        <input />
                    </div>
                </div>

                <div>
                    <label>signatory company</label>
                    <input />
                </div>

                <div>
                    <label>name of authorized signatory</label>
                    <div
                        className={l.gridWrapper__pageBody__footer__right__flex}
                    >
                        <input />
                        <input />
                    </div>
                </div>

                <div>
                    <label>signature</label>
                    <input />
                </div>
            </section>
        </div>
    )
}

export default Footer
