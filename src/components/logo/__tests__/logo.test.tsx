import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../index'

describe('Logo', () => {
    it('should render correctly ', () => {
        const tree = renderer
            .create(<Logo />)
            .toJSON()

        expect(tree).toMatchSnapshot()
    })
})

