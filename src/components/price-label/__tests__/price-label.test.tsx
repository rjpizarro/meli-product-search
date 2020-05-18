import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import PriceLabel from '../index'

// amount: number
// decimals?: number

describe('PriceLabel', () => {
    it('should render correctly with required props', () => {
        const tree = renderer
            .create(<PriceLabel amount={100} />)
            .toJSON()
        const { getByText } = render(<PriceLabel amount={100} />)

        expect(tree).toMatchSnapshot()
        expect(getByText('$ 100')).toBeInTheDocument()
    })

    it('should extend classNames when receive a className prop', () => {
        const { container } = render(<PriceLabel amount={100} className="find-this-class" />)

        expect(container.querySelector('[class="price-label find-this-class"]')).toBeTruthy()
    })

    it('should set fontSize when size prop is provided', () => {
        const { container } = render(<PriceLabel amount={100} size={50} />)

        expect(container.innerHTML).toEqual('<span style="font-size: 50px;" class="price-label">$ 100</span>')
    })

    it('should show decimals when decimals prop is provided', () => {
        const { getByTestId } = render(<PriceLabel amount={100} decimals={55} />)

        expect(getByTestId('decimals').innerHTML).toEqual("55")
    })

    it('should format decimals when only one number is provided', () => {
        const { getByTestId } = render(<PriceLabel amount={100} decimals={0} />)

        expect(getByTestId('decimals').innerHTML).toEqual("00")
    })
})

