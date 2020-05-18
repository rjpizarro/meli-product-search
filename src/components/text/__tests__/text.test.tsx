import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Text from '../index'

// component: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
// children: React.ReactChild | React.ReactChild[]
// className?: string
// size: number

describe('Text', () => {
    it('should render correctly with required props', () => {
        const tree = renderer
            .create(<Text>child</Text>)
            .toJSON()
        const { getByText } = render(<Text>child</Text>)

        expect(tree).toMatchSnapshot()
        expect(getByText('child')).toBeInTheDocument()
    })

    it('should extend classNames when receive a className prop', () => {
        const { container } = render(<Text className="find-this-class">child</Text>)

        expect(container.querySelector('[class="text find-this-class"]')).toBeTruthy()
    })

    it('should set 16px as default value and a span as tag', () => {
        const { container } = render(<Text>child</Text>)

        expect(container.innerHTML).toEqual('<span class="text" style="font-size: 16px;">child</span>')
    })

    it('should set fontSize', () => {
        const { container } = render(<Text size={24}>child</Text>)

        expect(container.innerHTML).toEqual('<span class="text" style="font-size: 24px;">child</span>')
    })

    it('should change the html tag when a component prop is provided', () => {
        const { container } = render(<Text component="h1">child</Text>)

        expect(container.innerHTML).toEqual('<h1 class="text" style="font-size: 16px;">child</h1>')
    })
})

