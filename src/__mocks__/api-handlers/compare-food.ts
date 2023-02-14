import { rest } from 'msw';
import { BASE_TEST_URL } from './_utils';

export const compareHandlers = [
  rest.post(BASE_TEST_URL('natural/nutrients'), async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ name: 'John', age: 30 }),
      ctx.set('x-app-id', 'custom-value'),
      ctx.set('x-app-key', 'custom-value'),
      ctx.set('x-remote-user-id', 'custom-value')
    );
  }),
  // rest.post(BASE_TEST_URL('/email/send'), async (req, res, ctx) => {
  //   return res(
  //     // Send a valid HTTP status code
  //     ctx.status(400),
  //     // And a response body, if necessary
  //     ctx.json({
  //       errorMessage: `Bad request`,
  //     })
  //   );
  // }),
];

export const compareErrorHandlers = [
  rest.post('', async (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ success: false, message: 'Error Occured!!!!' })
    );
  }),
];
