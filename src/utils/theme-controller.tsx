import type { NextPage } from 'next'
import { UseGlobalReducer } from './globalState'
import t from '../../styles/theme-controller.module.scss'

const ThemeController: NextPage = ({ children }) => {
    const {
        // @ts-ignore
        state: { toggleTheme },
    } = UseGlobalReducer()
    return <div className={toggleTheme ? t.dark : t.light}>{children}</div>
}

export default ThemeController
