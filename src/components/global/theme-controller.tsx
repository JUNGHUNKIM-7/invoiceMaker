import type { NextPage } from 'next'
import t from './theme-controller.module.scss'
import { UseGlobalReducer } from '../../utils/reducer/globalState'

const ThemeController: NextPage = ({ children }) => {
    const {
        // @ts-ignore
        state: { toggleTheme },
    } = UseGlobalReducer()
    return <div className={toggleTheme ? t.dark : t.light}>{children}</div>
}

export default ThemeController
