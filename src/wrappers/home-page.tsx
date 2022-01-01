import type { NextPage } from 'next'
import HomeBody from '../components/home/home-body'
import HomeFooter from '../components/home/home-footer'
import HomeNav from '../components/home/home-nav'

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
