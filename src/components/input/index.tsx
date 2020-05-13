import React, {InputHTMLAttributes} from 'react'
import classNames from 'classnames'

import './style.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string
    endAdornment?: JSX.Element
}

const getInputClasses = (hasEndAdornment: boolean) => {
    return classNames({
        'input__input-element': true,
        'input__input-element--with-end-adornment': hasEndAdornment
    })
}

const Input = (props: IInputProps) => {
    const {
        label,
        endAdornment,
        ...htmlInputProps
    } = props

    return (
        <div className="input">
            <input
                className={getInputClasses(Boolean(endAdornment))}
                placeholder={label}
                {...htmlInputProps}
            />
            { endAdornment && <div className="input__end-adornment">{ endAdornment }</div>}
        </div>
    )
}

export default Input