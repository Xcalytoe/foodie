import { setupServer } from 'msw/node';
import { apiHandlers } from '../api-handlers';
// This configures a request mocking server with the given request handlers.
export const server = setupServer(...apiHandlers);
