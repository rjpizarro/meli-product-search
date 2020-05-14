import React from 'react'
import { useLocation } from 'react-router'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ItemSearch = () => {
    const query = useQuery()
    const searchValue = query.get('search')

    return (
        <div>
            Item Search: {searchValue}
        </div>
    )
}

export default ItemSearch