import React from 'react'
import { useParams } from 'react-router'

const ItemDetails = () => {
    const { id } = useParams()

    return (
        <div>
            Item Details {id}
        </div>
    )
}

export default ItemDetails