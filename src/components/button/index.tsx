import React from 'react'
import classNames from 'classnames'
import './style.scss'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}

const Button = (props: IButtonProps) => {
    return (
        <button className={classNames(['button', props.className])}>
            {props.label}
        </button>
    )
}

export default Button