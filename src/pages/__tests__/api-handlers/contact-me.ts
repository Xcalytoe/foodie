import { rest } from 'msw';
import { BASE_TEST_URL } from './_utils';

export const contactHandlers = [
  rest.post(BASE_TEST_URL('/email/send'), async (req, res, ctx) => {
    //   const { re } = await req.json();
    return res(ctx.json(400));
  }),
  rest.post(BASE_TEST_URL('/email/send'), async (req, res, ctx) => {
    return res(
      // Send a valid HTTP status code
      ctx.status(400),
      // And a response body, if necessary
      ctx.json({
        errorMessage: `Bad request`,
      })
    );
  }),
];

export const contactErrorHandlers = [
  rest.post('', async (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ success: false, message: 'Error Occured!!!!' })
    );
  }),
];
