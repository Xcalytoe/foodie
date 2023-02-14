import { rest } from 'msw';
import { BASE_TEST_URL } from './_utils';

export const compareHandlers = [
  rest.post(BASE_TEST_URL('natural/nutrients'), async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: 'successful ' }));
  }),
];

export const compareErrorHandlers = [
  rest.post('', async (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ success: false, message: 'Error Occured!!!!' })
    );
  }),
];
