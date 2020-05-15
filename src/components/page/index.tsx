import React from 'react'
import { Row, Col, Grid } from 'react-flexbox-grid'
import './style.scss'

interface IPage {
    children: React.ReactChild
}

const Page = (props: IPage) => {
    return (
        <main>
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