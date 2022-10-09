import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';



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
  expect(colorButton).toHaveStyle({backgroundColor:'gray'})

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
  expect(colorButton).not.toHaveStyle({backgroundColor:'gray'})

})
