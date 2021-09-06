import type { NextPage } from 'next'
import { IoIosContact } from 'react-icons/io'
import {
    GlobalActionEnum,
    UseGlobalReducer,
} from '../../utils/reducer/globalState'
import { RiMoonClearLine, RiSunFill } from 'react-icons/ri'
import l from './styles/dashboard-layout.module.scss'

const DashboardLayout: NextPage = ({ children }) => {
    const {
        // @ts-ignore
        state: { toggleTheme },
        // @ts-ignore
        dispatch,
    } = UseGlobalReducer()
    return (
        <>
            <div className={l.dashBoardLayout}>
                <div>
                    <i>
                        <IoIosContact size={25} />
                    </i>
                    <p>user</p>
                </div>
                <button
                    className={l.dashBoardLayout__toggle}
                    onClick={() =>
                        dispatch({ type: GlobalActionEnum.DARKMODE })
                    }
                >
                    {toggleTheme ? (
                        <div>
                            <RiSunFill size={20} />
                        </div>
                    ) : (
                        <div>
                            <RiMoonClearLine size={20} />
                        </div>
                    )}
                </button>

                <button>sign out</button>
            </div>
            {children}
        </>
    )
}

export default DashboardLayout
