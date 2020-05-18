import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ItemDetails from '../item-details';
import useMakeRequest from '../../../libs/make-request'

jest.mock('../../../config/envConfig', () => () => ({ apiUrl: 'http://localhost:8000/api' }))

jest.mock('react-router', () => ({
    useParams: () => ({ id: 'MOCK-ID'}),
}));

jest.mock('../../../libs/make-request')

const mockItem = {
    id: "MOCK-ID",
    title: "Test item",
    condition: "new",
    description: "Test description",
    picture: "test picture",
    sold_quantity: 10,
    price: {
        amount: 100,
        decimals: 0
    }
}

describe('ItemDetails', () => {
    it('should render a detail component when have data', () => {
        useMakeRequest.mockReturnValue({
            data: {
                item: mockItem
            },
            isLoading: false
        })

        const { getByText, queryByTestId }  = render(<ItemDetails />);

        expect(getByText("Test item")).toBeInTheDocument()
        expect(queryByTestId('spinner')).not.toBeTruthy()
    })

    it('should set a page title based on the result data', async () => {
        useMakeRequest.mockReturnValue({
            data: {
                item: mockItem
            },
            isLoading: false
        })

        render(<ItemDetails />);

        await waitFor(() => {
            expect(document.title).toContain("Test item")
        })
    })

    it('should call a service on mount', () => {
        useMakeRequest.mockReturnValue({
            data: {},
            isLoading: false
        })

        render(<ItemDetails />);

        expect(useMakeRequest).toHaveBeenCalledWith('http://localhost:8000/api/items/MOCK-ID', 'get')
    })

    it('should render a spinner while loading', () => {
        useMakeRequest.mockReturnValue({
            data: {},
            isLoading: true
        })

        const { getByTestId }  = render(<ItemDetails />);

        expect(getByTestId('spinner')).toBeInTheDocument()
    })

    it('should not render when not have an item', () => {
        useMakeRequest.mockReturnValue({
            data: {},
            isLoading: false
        })

        const { queryByText, queryByTestId }  = render(<ItemDetails />);

        expect(queryByText("Test item")).not.toBeInTheDocument()
        expect(queryByTestId('spinner')).not.toBeTruthy()
    })
})

