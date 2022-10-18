import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3000/scoops', (req, res, ctx) => {

    return res(
      ctx.json([
        { name: 'chocolate', imagePath: 'http://127.0.0.1:5500/static/images/chocolate.png' },
        { name: 'vanila', imagePath: 'http://127.0.0.1:5500/static/images/vanila.png' },
      ])
    )
  }),

]