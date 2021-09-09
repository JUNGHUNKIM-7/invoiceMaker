import type { NextPage } from 'next'
import HomeNav from './sub-component/home-nav'
import HomeBody from './sub-component/home-body'
import HomeFooter from './sub-component/home-footer'
import h from './styles/home-page.module.scss'

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
