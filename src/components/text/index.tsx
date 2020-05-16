import React from 'react'
import classNames from 'classnames'
import './style.scss'

interface ITextProps {
    component: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    children: React.ReactChild | React.ReactChild[]
    className?: string
    size: number
}

const Text = (props: ITextProps) => {
    const { component: HtmlTag } = props

    return (
        <HtmlTag
            className={classNames(['text', props.className])}
            style={{
                fontSize: props.size,
            }}
        >
            {props.children}
        </HtmlTag>
    )
}

Text.defaultProps = {
    component: 'span',
    size: 16
}

export default Text