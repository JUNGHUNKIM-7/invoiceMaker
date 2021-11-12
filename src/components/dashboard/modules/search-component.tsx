import type { NextPage } from 'next'
import b from '../dash-board.module.scss'
import { HiDocumentSearch } from 'react-icons/hi'
import SearchInputSubComponent from './search-input-sub-component'
import SearchSelectionSubComponent from './search-selection-sub-component'

const SearchComponent: NextPage = () => {
    return (
        <div className={b.board__topWrapper__search}>
            <h4>Search</h4>
            <SearchInputSubComponent />
            <SearchSelectionSubComponent />

            <div className={b.board__topWrapper__search__btnWrapper}>
                <button>
                    <div>
                        <HiDocumentSearch size={20} />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SearchComponent
