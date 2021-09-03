import type { NextPage } from 'next'
import PageController from '../../src/components/pages/pageController'

const i = ['add contacts', 'import from csv']

const Index: NextPage = () => {
    return (
        <div>
            <PageController title={'contacts'} items={i} />
        </div>
    )
}

export default Index
