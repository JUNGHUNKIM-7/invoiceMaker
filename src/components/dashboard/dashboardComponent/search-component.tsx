import type { NextPage } from 'next'
import b from '../../../../pages/dashboard/dashBoard.module.scss'
import { HiDocumentSearch } from 'react-icons/hi'
import SearchInputSubComponent from './search-sub/search-input-sub-component'
import SearchSelectionSubComponent from './search-sub/search-selection-sub-component'

const SearchComponent: NextPage = () => {
    return (
        <div className={b.boardMain__topWrapper__search}>
            <h4>Search</h4>
            <SearchInputSubComponent />
            <SearchSelectionSubComponent />

            <div className={b.boardMain__topWrapper__search__btnWrapper}>
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
