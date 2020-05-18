import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react';
import Header from '../index'

const mockOnClick = jest.fn()

jest.mock('../../../components/logo', () => (props) => <div />)
jest.mock('../../../components/base-button', () =>
    (props) => <button data-testid="base-button" onClick={(() => props.onClick())} />
)

describe('Header', () => {
    it('should render correctly ', () => {
        const tree = renderer
            .create(
            <Header onLogoClick={mockOnClick} >
                <div>children</div>
            </Header>
        ).toJSON()

        const { getByTestId }  = render(
            <Header onLogoClick={mockOnClick} >
                <div data-testid="child-component">children</div>
            </Header>
        );

        const button = getByTestId('base-button')

        fireEvent.click(button)

        expect(tree).toMatchSnapshot()
        expect(mockOnClick).toHaveBeenCalledTimes(1)
        expect(getByTestId('child-component')).toBeInTheDocument()
    })
})

