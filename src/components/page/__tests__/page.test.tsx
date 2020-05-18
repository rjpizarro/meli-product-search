import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Page from '../index'

describe('Page', () => {
    it('should render correctly ', () => {
        const tree = renderer
            .create(<Page>
                <p>child</p>
            </Page>)
            .toJSON()
        const { getByText } = render(
            <Page>
                <p>child</p>
            </Page>
        )

        expect(tree).toMatchSnapshot()
        expect(getByText('child')).toBeInTheDocument()
    })

    it('should extend classNames when receive a className prop', () => {
        const { container } = render(
            <Page className="find-this-class">
                <p>child</p>
            </Page>
        )

        expect(container.querySelector('[class="find-this-class"]')).toBeTruthy()
    })
})

