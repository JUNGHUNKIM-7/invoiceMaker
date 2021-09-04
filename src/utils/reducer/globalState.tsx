import { ReactNode, createContext, useReducer, useContext } from 'react'

const globalInitialState = {
    toggleTheme: false,
}
type GlobalInitialType = typeof globalInitialState

export enum GlobalActionEnum {
    DARKMODE = 'DARKMODE',
}

type GlobalActionType = { type: GlobalActionEnum }

const globalReducer = (state: GlobalInitialType, action: GlobalActionType) => {
    switch (action.type) {
        case GlobalActionEnum.DARKMODE:
            return {
                ...state,
                toggleTheme: !state.toggleTheme,
            }
        default:
            return state
    }
}

export const globalStore = () => {
    const [state, dispatch] = useReducer(globalReducer, globalInitialState)

    return {
        state,
        dispatch,
    }
}

const globalReducerContext = createContext<ReturnType<
    typeof globalStore
> | null>(null)

export const GlobalReducerProvider = ({
    children,
}: {
    children: ReactNode
}) => (
    <globalReducerContext.Provider value={globalStore()}>
        {children}
    </globalReducerContext.Provider>
)

export const UseGlobalReducer = () => useContext(globalReducerContext)
