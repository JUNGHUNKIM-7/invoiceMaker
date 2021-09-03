import type { NextPage } from 'next'
import PageController from '../../src/components/pages/pageController'

const i = ['add products', 'import from csv']

const Index: NextPage = () => {
    return (
        <div>
            <PageController title={'products'} items={i} />
        </div>
    )
}

export default Index
