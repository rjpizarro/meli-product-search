import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Input from '../index'

describe('Input', () => {
    it('should render correctly ', () => {
        const tree = renderer
            .create(<Input label="Input label" />)
            .toJSON()
        const { container } = render(<Input label="Input label" />)

        expect(tree).toMatchSnapshot()
        expect(container.querySelector('[placeholder="Input label"]')).toBeTruthy()
    })

    it('should add a component as adornment', () => {
        const { getByTestId } = render(<Input label="Input label" endAdornment={<div data-testid="endAdornment" />} />);
        const tree = renderer
            .create(<Input label="Input label" />)
            .toJSON()

        expect(tree).toMatchSnapshot()
        expect(getByTestId('endAdornment')).toBeInTheDocument()
    })
})

