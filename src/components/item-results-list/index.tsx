import React from 'react'
import ItemCard, { ItemCardProps } from '../item-card'
import './style.scss'

interface IItemCard extends ItemCardProps {
    id: string
}

interface IItemResultsList {
    results: IItemCard[]
    onItemClick: (id: string) => void
}

const ItemResultsList = (props: IItemResultsList) => {

    return (
        <ul className="item-results-list">
            {
                props.results.map(({id, ...itemProps}) => (
                    <li key={id} className="item-results-list__card">
                        <button className="item-results-list__button" onClick={() => props.onItemClick(id)}>
                            <ItemCard {...itemProps} />
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

export default ItemResultsList