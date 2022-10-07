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

test('button turns blue when clicked', () => {

})

// test('button turns blue when clicked', () => {
//
// })

