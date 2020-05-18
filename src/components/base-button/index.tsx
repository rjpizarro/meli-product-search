import React from 'react'
import './style.scss'

interface IBaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactChild
}

const BaseButton = (props: IBaseButtonProps) => {
    return (
        <button className="base-button" {...props}>
            {props.children}
        </button>
    )
}

export default BaseButton