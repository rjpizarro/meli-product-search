import React from 'react'
import { Row, Col, Grid } from 'react-flexbox-grid'
import './style.scss'

interface IPage {
    children: React.ReactChild | React.ReactChild[]
    className?: string
}

const Page = (props: IPage) => {
    return (
        <main className={props.className}>
            <Grid className="page">
                <Row center="xs">
                    <Col xs={10} className="page__content">
                        {props.children}
                    </Col>
                </Row>
            </Grid>
        </main>
    )
}

export default Page