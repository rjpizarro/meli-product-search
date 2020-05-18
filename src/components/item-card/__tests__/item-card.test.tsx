import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import ItemCard from '../index'

jest.mock('../../../components/price-label', () => () => <div data-testid="price-label" />)
jest.mock('../../../components/icons', () => ({
    ShippingIcon: () => <div data-testid="shipping-icon" />
}))

const item = {
    id: "MOCK-ID-1",
    title: "Test item 1",
    condition: "new",
    description: "Test description 1",
    picture: "test picture 1",
    sold_quantity: 10,
    price: {
        amount: 100,
        decimals: 0
    }
}

describe('ItemCard', () => {
    it('should render correctly ', () => {
        const tree = renderer
            .create(<ItemCard {...item} />)
            .toJSON()
        const { queryByTestId }  = render(<ItemCard {...item} />);

        expect(tree).toMatchSnapshot()
        expect(queryByTestId('shipping-icon')).not.toBeInTheDocument()
    })

    it('should render a icon when free_shipping prop is true', () => {
        const { queryByTestId }  = render(<ItemCard {...item} free_shipping={true} />);
        const tree = renderer
            .create(<ItemCard {...item} free_shipping={true} />)
            .toJSON()

        expect(tree).toMatchSnapshot()
        expect(queryByTestId('shipping-icon')).toBeInTheDocument()
    })
})

