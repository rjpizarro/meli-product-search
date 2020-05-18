import React from 'react';
import renderer from 'react-test-renderer';
import ShippingIcon from '../shipping-icon'

describe('ShippingIcon', () => {
    it('should render correctly ', () => {
        const tree = renderer
            .create(<ShippingIcon />)
            .toJSON()

        expect(tree).toMatchSnapshot()
    })
})

