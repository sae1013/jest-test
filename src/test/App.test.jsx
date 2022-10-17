import {render,screen} from "@testing-library/react";
import App from '../App.jsx'

test("Vite Jest test",()=> {
  render(<App/>);
  const button = screen.getByRole("button",{
    name:'submit'
  });
  expect(button).toBeInTheDocument();

  const main = screen.getByRole("main");
  expect(main).toBeInTheDocument();
})


