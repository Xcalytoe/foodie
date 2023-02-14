import { act, renderHook, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCompareFoodMutation } from '../../../hooks/useCompareFoodMutation';
// eslint-disable-next-line jest/no-mocks-import
import { server } from '../__mocks__/msw/server';

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useCompareFoodMutation', () => {
  it('should submit form', async () => {
    const { result } = renderHook(() => useCompareFoodMutation(), {
      wrapper,
    });
    act(() => {
      result.current.mutate({
        name: 'fTest',
        message: 'good site',
        email: 'eTest@test.com',
      });
    });

    // Waiting for the request status to resolve as success, i.e: statusCode = 200
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
  it('should return error from the server', async () => {
    server.use(
      rest.post('*', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    const { result } = renderHook(() => useCompareFoodMutation(), {
      wrapper,
    });
    act(() => {
      result.current.mutate({
        name: '',
        message: '',
        email: '',
      });
    });
    await waitFor(() => expect(result.current.isError).toBe(true));
  });
});
