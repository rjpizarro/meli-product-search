import React from 'react'
import searchIcon from './assets/ic_search.png'
import searchIcon2x from './assets/ic_search@2x.png'

const SearchIcon = () => {
    return (
        <img
            srcSet={
                `${searchIcon2x} 36w,
                ${searchIcon} 18w`
            }
            sizes="
                (max-width: 480px) 18px,
                18px,
            "
            src={searchIcon2x}
            alt="Search Icon"
        />
    )
}

export default SearchIcon