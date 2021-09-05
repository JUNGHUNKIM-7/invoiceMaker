import type { NextPage } from 'next'
import PageController from '../../src/components/pages/page-controller'

const Index: NextPage = () => {
    return (
        <div>
            <PageController title={'products'} />
        </div>
    )
}

export default Index
