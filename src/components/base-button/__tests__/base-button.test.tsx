import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import BaseButton from '../index'

const mockOnClick = jest.fn()

describe('BaseButton', () => {
    it('should render correctly ', () => {
        const tree = renderer
            .create(
            <BaseButton>
                <div>children</div>
            </BaseButton>
        ).toJSON()

        const { getByTestId }  = render(
            <BaseButton>
                <div data-testid="child-component">children</div>
            </BaseButton>
        );

        expect(tree).toMatchSnapshot()
        expect(getByTestId('child-component')).toBeInTheDocument()
    })

    it('should accept any props passed', () => {
        const { getByTestId } = render(
            <BaseButton data-testid="find-me">
                <div>
                    children
                </div>
            </BaseButton>
        );

        expect(getByTestId('find-me')).toBeInTheDocument()
    })
})

