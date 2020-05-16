import React from 'react'
import get from 'lodash/get'
import { useParams } from 'react-router'

// LIBS
import useMakeRequest from '../../libs/make-request'
import endpoints from '../../config/endpoints'

// COMPONENTS
import ItemPageDetails from './components/item-page-details'
import Spinner from '../../components/spinner'

const ItemDetails = () => {
    const { id } = useParams()
    const { data, isLoading } = useMakeRequest(
        `${endpoints.items.get}/${id}`,
        'get',
    )

    const item = get(data, 'item')

    if (isLoading) {
        return <Spinner />
    }

    if (item) {
        return (
            <ItemPageDetails {...item} />
        )
    }

    return null

}

export default ItemDetails