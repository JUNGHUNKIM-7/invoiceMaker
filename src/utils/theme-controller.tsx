import type { NextPage } from 'next'
import t from '../../styles/theme-controller.module.scss'
import { UseGlobalReducer } from './reducer/globalState'

const ThemeController: NextPage = ({ children }) => {
    const {
        // @ts-ignore
        state: { toggleTheme },
    } = UseGlobalReducer()
    return <div className={toggleTheme ? t.dark : t.light}>{children}</div>
}

export default ThemeController
