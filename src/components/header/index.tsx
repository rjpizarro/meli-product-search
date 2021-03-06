import React from 'react'
import { Row, Col, Grid } from 'react-flexbox-grid'
import Logo from '../logo'
import './style.scss'
import BaseButton from '../base-button'

interface IHeaderProps {
    children: React.ReactChild
    onLogoClick: () => void
}

const Index = (props: IHeaderProps) => {
    return (
        <header className="header">
            <Grid>
                <Row center="xs">
                    <Col xs={3} md={1} className="header__logo">
                        <BaseButton onClick={props.onLogoClick}>
                            <Logo />
                        </BaseButton>
                    </Col>
                    <Col xs={10} md={9}>
                        {props.children}
                    </Col>
                </Row>
            </Grid>
        </header>
    )
}

export default Index