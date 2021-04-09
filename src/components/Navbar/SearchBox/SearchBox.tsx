import React from 'react';
import {ReactComponent as SearchLogo} from '../../../assets/search.svg';


const SearchBox: React.FC = () => {
    return(
        <div className='search-box position-relative'>
            <div className="search-logo position-absolute">
                <SearchLogo />
            </div>
        </div>
    )
}

export default SearchBox;