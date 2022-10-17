import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3030/test', (req, res, ctx) => {
    // Persist user's authentication in the session
    return res(
      ctx.status(200),
      ctx.json({
        name:'test'
      })
    )
  }),

]