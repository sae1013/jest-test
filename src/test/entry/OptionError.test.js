import {findByRole, render, screen} from '@testing-library/react';
import {server} from "../../mocks/server.js";
import {rest} from 'msw'
import ScoopOptions from "../../components/entry/ScoopOptions.jsx";
import Option from '../../components/entry/Option.jsx'
test('http Reqeust Error Test', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3000/scoops', (req, res, ctx) => {
      return res(ctx.status(500),ctx.json({
          message:'something went wrong'
        })
      )
    }),
  )
  render(<Option optionType={"scoops"}></Option>)
  const alertModal = await screen.findByRole('error-alert')
  expect(alertModal).toBeInTheDocument();

})