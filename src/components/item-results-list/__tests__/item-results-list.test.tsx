import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import ItemResultsList from '../index'

const mockItemClick = jest.fn()

jest.mock('../../../components/item-card', () => () => <div data-testid="item-card" />)

const items = [
    {
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
    },
    {
        id: "MOCK-ID-2",
        title: "Test item 2",
        condition: "new",
        description: "Test description 2",
        picture: "test picture 2",
        sold_quantity: 10,
        price: {
            amount: 100,
            decimals: 0
        }
    },
    {
        id: "MOCK-ID-3",
        title: "Test item 4",
        condition: "new",
        description: "Test description 3",
        picture: "test picture 3",
        sold_quantity: 10,
        price: {
            amount: 100,
            decimals: 0
        }
    },
    {
        id: "MOCK-ID-4",
        title: "Test item 4",
        condition: "new",
        description: "Test description 4",
        picture: "test picture 4",
        sold_quantity: 10,
        price: {
            amount: 100,
            decimals: 0
        }
    },
]

describe('ItemResultsList', () => {
    it('should render a list of item-card ', () => {
        const tree = renderer
            .create(<ItemResultsList onItemClick={mockItemClick} results={items} />)
            .toJSON()
        const { getAllByTestId }  = render(<ItemResultsList onItemClick={mockItemClick} results={items} />);

        const cardButtons = getAllByTestId('button')

        expect(tree).toMatchSnapshot()
        fireEvent.click(cardButtons[0])

        expect(mockItemClick).toHaveBeenCalledTimes(1)
        expect(mockItemClick).toHaveBeenCalledWith("MOCK-ID-1")
        expect(cardButtons).toHaveLength(4)
    })
})

