import type { NextPage } from 'next'
import PageController from '../../src/components/pages/pageController'

const Index: NextPage = () => {
    return (
        <div>
            <PageController title={'contacts'} />
        </div>
    )
}

export default Index
