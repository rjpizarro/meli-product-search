import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Button from '../index'

describe('Button', () => {
    it('should render correctly ', () => {
        const tree = renderer
            .create(<Button label="Button label" />)
            .toJSON()
        const { getByText } = render(<Button label="Button label" />)

        expect(tree).toMatchSnapshot()
        expect(getByText('Button label')).toBeInTheDocument()
    })

    it('should extend classNames when receive a className prop', () => {
        const { container } = render(<Button label="Button label" className="find-this-class" />);

        expect(container.innerHTML).toEqual("<button class=\"button find-this-class\">Button label</button>")
    })
})

