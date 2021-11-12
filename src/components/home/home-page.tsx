import type { NextPage } from 'next'
import HomeNav from './modules/home-nav'
import HomeBody from './modules/home-body'
import HomeFooter from './modules/home-footer'
import h from './home-page.module.scss'

const HomePage: NextPage = () => {
    return (
        <section className={h.home}>
            <HomeNav />
            <HomeBody />
            <HomeFooter />
        </section>
    )
}

export default HomePage
