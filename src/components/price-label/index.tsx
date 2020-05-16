// @ts-ignore
import React from 'react'
import classNames from 'classnames'
import './style.scss'

interface IPriceLabel {
    amount: number
    decimals?: number
    size?: number
    className?: string
}

const getDecimalsLabel = (decimals: string | undefined) => {
    if (decimals === undefined) return null

    const splittedDecimals = decimals.split('')

    if (splittedDecimals.length === 2) {
        return decimals
    }

    return [...splittedDecimals, "0"].join('')
}

const PriceLabel = (props: IPriceLabel) => {
    const formattedPrice = new Intl.NumberFormat().format(Number(props.amount))
    const showDecimals = props.decimals !== undefined
    const fontSize = props.size || 24

    return (
        <span style={{fontSize: fontSize}} className={classNames(['price-label', props.className])}>
            $ {formattedPrice}
            {
                showDecimals &&
                <span style={{fontSize: fontSize / 2 }} className="price-label__decimals">
                    { getDecimalsLabel(String(props.decimals)) }
                </span>
            }
        </span>
    )
}

export default PriceLabel