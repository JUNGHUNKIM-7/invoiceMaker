import type { NextPage } from 'next'
import PageRouter from '../../src/wrappers/page_router'
import Contacts from '../../src/wrappers/contacts'

const Index: NextPage = () => {
    return (
        <div>
            <Contacts />
        </div>
    )
}

export default Index
