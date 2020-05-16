import React, {useEffect} from 'react'
import get from 'lodash/get'
import { useLocation, useHistory } from 'react-router'

// LIBS
import useMakeRequest from '../../libs/make-request'
import endpoints from '../../config/endpoints'

// COMPONENTS
import ItemResultsList from '../../components/item-results-list'
import Page from '../../components/page'

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
        <Page>
            <ItemResultsList results={items} onItemClick={(id) => history.push(`items/${id}`)} />
        </Page>
    )
}

export default ItemSearch