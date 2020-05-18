import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ItemSearch from '../item-search';
import useMakeRequest from '../../../libs/make-request'

const searchValue = "notebook"

const mockMakeRequestFetch = jest.fn()
jest.mock('../../../config/envConfig', () => () => ({ apiUrl: 'http://localhost:8000/api' }))
jest.mock('../../../libs/make-request')
jest.mock('../../../components/item-results-list', () => () => <div data-testid="search-results" />)
jest.mock('../../../components/spinner', () => () => <div data-testid="spinner" />)
jest.mock('react-router', () => ({
    useLocation: () => ({ search: `?search=notebook`}),
    useHistory: jest.fn()
}));

const mockResponse = [
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

describe('ItemSearch', () => {
    it('should render correctly when have data', async () => {
        useMakeRequest.mockReturnValue({
            data: {
                items: mockResponse
            },
            isLoading: false,
            makeRequest: mockMakeRequestFetch
        })

        const { getByTestId, queryByTestId } = render(<ItemSearch />);

        expect(useMakeRequest).toHaveBeenCalledWith(
            `http://localhost:8000/api/items?q=${searchValue}&limit=4`,
            'get',
            { lazy: true }
        )
        expect(mockMakeRequestFetch).toHaveBeenCalledTimes(1)
        expect(getByTestId('search-results')).toBeInTheDocument()
        expect(queryByTestId('spinner')).not.toBeInTheDocument()

        await waitFor(() => {
            expect(document.title).toContain(`Resultados de búsqueda para ${searchValue}`)
        })
    })

    it('should render a spinner while is loading', async () => {
        useMakeRequest.mockReturnValue({
            data: {},
            isLoading: true,
            makeRequest: mockMakeRequestFetch
        })

        const { getByTestId }  = render(<ItemSearch />);
        expect(getByTestId('spinner')).toBeInTheDocument()
    })
})

