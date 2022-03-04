import TodoList from "../TodoList";
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("TodoList headline renders with correct text", () => {
    const component = render(<TodoList/>);
    const headlineElement = component.getByTestId("headline");

    expect(headlineElement.textContent).toBe("Todo List")
})

test("TodoList headline renders with correct className", () => {
    const component = render(<TodoList/>);
    const headlineElement = component.getByTestId("headline");

    expect(headlineElement.className).toBe("headline")
})

test("Render button with correct text", () => {
    const component = render(<TodoList/>);
    const buttonElement = component.getByTestId("btn");

    expect(buttonElement.textContent).toBe("Add")
})

test("Value of first option element shoudld be 'all' ", () => {
    const component = render(<TodoList/>);
    const optionElement = component.getByTestId('all')

    expect(optionElement.value).toBe('all')
})


test("check if todo renders correctly", () => {
    const component = render(<TodoList/>);
    const taskInputEl = component.getByTestId('textinput')
    const nameInputEl = component.getByTestId('nameinput')

    

    expect(taskInputEl.value).toBe('')
    expect(nameInputEl.value).toBe('')


    fireEvent.change(taskInputEl, {
        target: {
            value: "Clean"
        }
    })

    expect(taskInputEl.value).toBe('Clean')

    fireEvent.change(nameInputEl, {
        target: {
            value: "Carin"
        }
    })

    expect(nameInputEl.value).toBe('Carin')

  
})