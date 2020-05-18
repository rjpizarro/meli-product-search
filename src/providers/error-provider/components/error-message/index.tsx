import React from 'react'
import { Row, Col, Grid } from 'react-flexbox-grid'
import './style.scss'

interface ErrorMessageProps {
    message: string
    code: string
    onCloseIconClick: () => void
}

const ErrorMessage = (props: ErrorMessageProps) => {
    const { message, code, onCloseIconClick } = props

    return (
        <Grid>
            <Row center="xs">
                <Col xs={10}>
                    <div className="error-message">
                        <span className="error-message__close-icon" onClick={onCloseIconClick}>
                            X
                        </span>
                        <span className="error-message__title">
                            Oops, algo no salió como esperábamos.
                        </span>
                        <span className="error-message__message">
                            {message}
                        </span>
                        <span className="error-message__code">
                            Código: {code}
                        </span>
                    </div>
                </Col>
            </Row>
        </Grid>
    )
}

export default ErrorMessage