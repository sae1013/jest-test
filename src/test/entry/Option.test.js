import {render,screen,waitFor,waitForElement} from "@testing-library/react";
import {act} from 'react-dom/test-utils';

import Option from '../../components/entry/Option.jsx';

test("Vite Jest test",async()=> {
  render(<Option optionType={"scoops"}/>);
  //find Images
  const scoopImages = await screen.findAllByRole('img',
    {name:/scoop$/i}) ;
  expect(scoopImages).toHaveLength(2);
  // const error = screen.getByRole('error');
  // expect(error).toBeInTheDocument();

})
