import React, {useEffect} from 'react'
import get from 'lodash/get'
import { useParams } from 'react-router'

// LIBS
import useMakeRequest from '../../libs/make-request'
import endpoints from '../../config/endpoints'

// COMPONENTS
import ItemPageDetails from './components/item-page-details'
import Spinner from '../../components/spinner'
import {Helmet} from 'react-helmet'
import {useErrorContext} from '../../providers/error-provider'

const ItemDetails = () => {
    const { id } = useParams()
    const { data, isLoading, error } = useMakeRequest(
        `${endpoints.items.get}/${id}`,
        'get',
    )
    const [, dispatchError] = useErrorContext()

    useEffect(() => {
        if (error) {
            dispatchError({
                type: 'add-error',
                message: get(error, 'message', ''),
                code: get(error, 'code', ''),
            })
        }
    }, [error])

    const item = get(data, 'item')

    if (isLoading) {
        return <Spinner data-testid="spinner" />
    }

    if (item) {
        return (
            <>
                <Helmet>
                    <title>{get(item, 'title', 'Detalle de producto')}</title>
                </Helmet>
                <ItemPageDetails {...item} />
            </>
        )
    }

    return null

}

export default ItemDetails