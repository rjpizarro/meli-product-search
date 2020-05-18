import React from 'react';
import renderer from 'react-test-renderer';
import SearchIcon from '../search-icon'

describe('SearchIcon', () => {
    it('should render correctly ', () => {
        const tree = renderer
            .create(<SearchIcon />)
            .toJSON()

        expect(tree).toMatchSnapshot()
    })
})

