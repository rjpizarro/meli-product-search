import React from 'react'
import { ShippingIcon } from '../icons'
import PriceLabel from '../price-label'
import './style.scss'
import Text from '../text'

export type ItemCardProps = {
    picture: string
    title: string
    free_shipping: boolean
    location: string
    price: {
        amount: number,
        decimals?: number
    }
}

const ItemCard = (props: ItemCardProps) => {
    const { picture, title, free_shipping, location, price } = props

    return (
        <div className="item-card">
            <div className="item-card__picture-container">
                <img
                    className="item-card__picture"
                    src={picture}
                    alt={`${title}`}
                />
            </div>
            <div className="item-card__details-container">
                <div className="item-card__price-details">
                    <PriceLabel amount={price.amount} />
                    {free_shipping &&
                      <span className="item-card__shipping-icon">
                          <ShippingIcon />
                      </span>
                    }
                </div>
                <h2 className="item-card__title">{title}</h2>
            </div>
            <div className="item-card__location-container">
                <span className="item-card__location">
                    {location}
                </span>
            </div>
        </div>
    )
}

export default ItemCard
