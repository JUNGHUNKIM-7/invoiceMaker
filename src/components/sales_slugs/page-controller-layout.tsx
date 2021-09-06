import type { NextPage } from 'next'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import p from './styles/page-controller-layout.module.scss'
import { useRouting } from '../../utils/route/routing'

const PageControllerLayout: NextPage = ({ children }) => {
    const { routerBack } = useRouting()

    return (
        <div>
            <div className={p.controller_nav} onClick={routerBack}>
                <AiOutlineCloseCircle />
                <p>back to previous page</p>
            </div>
            {children}
        </div>
    )
}

export default PageControllerLayout