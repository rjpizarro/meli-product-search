import React from 'react'
import logo from './assets/logo_ml.png'
import logo2x from './assets/logo_ml@2x.png'

const Logo = () => {
    return (
        <img
            srcSet={
                `${logo2x} 106w,
                ${logo} 53w`
            }
            sizes="
                (max-width: 480px) 53px,
                60px,
            "
            src={logo2x}
            alt="Mercado Libre"
        />
    )
}

export default Logo