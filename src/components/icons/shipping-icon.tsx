import React from 'react'
import shippingIcon from './assets/ic_shipping.png'
import shippingIcon2x from './assets/ic_shipping@2x.png'

const ShippingIcon = () => {
    return (
        <img
            srcSet={
                `${shippingIcon2x} 36w,
                ${shippingIcon} 18w`
            }
            sizes="
                (max-width: 480px) 18px,
                18px,
            "
            src={shippingIcon2x}
            alt="Search Icon"
        />
    )
}

export default ShippingIcon