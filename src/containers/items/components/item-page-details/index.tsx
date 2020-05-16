import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Page from '../../../../components/page'
import PriceLabel from '../../../../components/price-label'
import Text from '../../../../components/text'

import './style.scss'
import Button from '../../../../components/button'

interface IItemPageDetails {
    title: string
    condition: 'new' | 'used',
    description: string,
    picture: string,
    sold_quantity: number,
    price: {
        amount: number
        decimals: number
    }
}

const conditionLabel = {
    new: 'Nuevo',
    used: 'Usado'
}

const ItemPageDetails = (props: IItemPageDetails) => {

    return (
        <Page className="item-page-details">
            <Row className="item-page-details__resume-container">
                <Col xs={8}>
                    <img
                        className="item-page-details__picture"
                        src={props.picture}
                        alt={props.title}
                    />
                </Col>
                <Col xs={4} className="item-page-details__resume">
                    <Text size={14}>
                        {conditionLabel[props.condition]} - {props.sold_quantity} vendidos
                    </Text>
                    <Text className="item-page-details__title" component="h2" size={24}>
                        {props.title}
                    </Text>
                    <PriceLabel
                        size={46}
                        amount={props.price.amount}
                        decimals={props.price.decimals}
                        className="item-page-details__price"
                    />
                    <div className="item-page-details__buy-button-container">
                        <Button label="Comprar" />
                    </div>
                </Col>
            </Row>
            {
                props.description &&
                <Row className="item-page-details__description-container">
                    <Col xs={8}>
                        <Text className="item-page-details__description-title" component="h3" size={28}>
                            Descripción del Producto
                        </Text>
                        <Text className="item-page-details__description-body" component="p">
                            {props.description}
                        </Text>
                    </Col>
                </Row>
            }
        </Page>
    )
}

export default ItemPageDetails