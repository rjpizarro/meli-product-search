import React from 'react'
import './style.scss'

interface IPriceLabel {
    amount: string
    decimals?: string
    size?: number
}

const PriceLabel = (props: IPriceLabel) => {
    const formattedPrice = new Intl.NumberFormat().format(Number(props.amount))

    return (
        <span style={{fontSize: props.size || 24}}>
            $ {formattedPrice}
        </span>
    )
}

export default PriceLabel