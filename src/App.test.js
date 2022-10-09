import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';


test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button',{name:'Change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor:'red'});

});

test('button has changed from red to blue', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button',{name:'Change to blue'});
  expect(colorButton.textContent).toBe('Change to blue');
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor:'blue'});
  expect(colorButton.textContent).toBe('Change to red');
})

test('checkbox initial', () => {
  render(<App></App>)
  const colorButton = screen.getByRole('button');
  expect(colorButton).toBeEnabled()

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked()
  expect(colorButton).toBeEnabled();
})

test('checkbox click', () => {
  render(<App></App>)
  const colorButton = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox)

  expect(colorButton).not.toBeEnabled()
  expect(checkbox).toBeChecked()

})


