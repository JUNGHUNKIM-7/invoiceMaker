import { ReactNode, createContext, useReducer, useContext } from 'react'

const globalInitialState = {
    toggleTheme: false,
    bookMarked: [
        {
            id: 0,
            category: '',
            title: '',
            // date: Date.now(),
        },
    ],
}
type GlobalInitialType = typeof globalInitialState

interface BookMark<T> {
    id: number
    category: T
    title: T
    // date: Date
}

export enum GlobalActionEnum {
    DARKMODE = 'DARKMODE',
    ADD_BOOKMARKED = 'ADD_BOOKMARKED',
    DELETE_BOOKMARKED = 'DELETE_BOOKMARKED',
}

type GlobalActionType =
    | { type: GlobalActionEnum.DARKMODE }
    | { type: GlobalActionEnum.ADD_BOOKMARKED; bookMarkObj: BookMark<string> }
    | {
          type: GlobalActionEnum.DELETE_BOOKMARKED
          key: Pick<BookMark<string>, 'id'>
      }

//todo bookmark db works. c/d
const globalReducer = (state: GlobalInitialType, action: GlobalActionType) => {
    switch (action.type) {
        case GlobalActionEnum.DARKMODE:
            return {
                ...state,
                toggleTheme: !state.toggleTheme,
            }
        case GlobalActionEnum.ADD_BOOKMARKED:
            return {
                ...state,
                bookMarked: [...state.bookMarked, action.bookMarkObj],
            }
        case GlobalActionEnum.DELETE_BOOKMARKED:
            return {
                ...state,
                bookMarked: state.bookMarked.filter(
                    ({ id }) => (id as number) !== Number(action.key.id)
                ),
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
