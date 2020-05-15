import React, {useEffect} from 'react'
import get from 'lodash/get'
import { useLocation, useHistory } from 'react-router'
import ItemResultsList from '../../components/item-results-list'
import useMakeRequest from '../../libs/make-request'
import endpoints from '../../config/endpoints'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ItemSearch = () => {
    const query = useQuery()
    const history = useHistory()
    const searchValue = query.get('search')
    const { data, makeRequest: search } = useMakeRequest(
        `${endpoints.items.get}?q=${searchValue}&limit=4`,
        'get',
        { lazy: true }
    )

    useEffect(() => {
        search()
    }, [searchValue])

    const items = get(data, 'items', [])

    return (
        <div>
            <ItemResultsList results={items} onItemClick={(id) => history.push(`items/${id}`)} />
        </div>
    )
}

export default ItemSearch