import type { NextPage } from 'next'
import t from './themeController.module.scss'
import { UseGlobalReducer } from '../reducer/globalState'

const ThemeController: NextPage = ({ children }) => {
    // @ts-ignore
    const { state } = UseGlobalReducer()
    return (
        <div className={state.toggleTheme ? t.dark : t.light}>{children}</div>
    )
}

export default ThemeController
