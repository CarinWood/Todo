import Footer from '../Footer'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


test("footer renders with correct text", () => {
    const component = render(<Footer/>);
    const footerElement = component.getByTestId("footer");

    expect(footerElement.textContent).toBe("Created and Built by Carin Wood")
})
