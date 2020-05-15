import React from 'react'
import { ShippingIcon } from '../icons'
import PriceLabel from '../price-label'
import './style.scss'

export type ItemCardProps = {
    picture: string
    title: string
    freeShipping: boolean
    location: string
    onCardClick?: () => void
    price: {
        amount: string,
        decimals?: string
    }
}

const ItemCard = (props: ItemCardProps) => {
    const { picture, title, freeShipping, location, price } = props

    return (
        <div className="item-card">
            <div className="item-card__picture-container">
                <div className="item-card__picture" style={{backgroundImage: `url(${picture})`}} />
                <img
                    className="item-card__picture-img"
                    src={picture}
                    alt={`${title}`}
                />
            </div>
            <div className="item-card__details-container">
                <div className="item-card__price-details">
                    <PriceLabel amount={price.amount} decimals={price.decimals} />
                    {freeShipping &&
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
