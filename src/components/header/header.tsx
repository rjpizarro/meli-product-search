import React from 'react'
import { Row, Col, Grid } from 'react-flexbox-grid'
import Logo from '../logo'
import './style.scss'

interface IHeaderProps {
    children: React.ReactChild
}

const Header = (props: IHeaderProps) => {
    return (
        <header className="header">
            <Grid>
                <Row center="xs">
                    <Col xs={1} className="header__logo">
                        <Logo />
                    </Col>
                    <Col xs={9}>
                        {props.children}
                    </Col>
                </Row>
            </Grid>
        </header>
    )
}

export default Header