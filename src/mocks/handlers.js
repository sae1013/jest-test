import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3000/scoops', (req, res, ctx) => {

    return res(
      ctx.json([
        { name: 'chocolate', imagePath: 'http://localhost:5173/public/images/chocolate.png' },
        { name: 'vanila', imagePath: 'http://localhost:5173/images/vanila.png' },
      ])
    )
  }),

]