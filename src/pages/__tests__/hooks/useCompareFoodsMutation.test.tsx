import React, { ReactNode } from 'react';
import {
  act,
  //   render,
  renderHook,
  //   screen,
  waitFor,
} from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCompareFoodMutation } from '../../../hooks/useCompareFoodMutation';
import { rest } from 'msw';
// eslint-disable-next-line jest/no-mocks-import
import { server } from '../../../__mocks__/msw/server';

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useContactMeMutation', () => {
  it('should submit form', async () => {
    const { result } = renderHook(() => useCompareFoodMutation(), {
      wrapper,
    });
    act(() => {
      result.current.mutate({
        query: 'data',
      });
    });
    // Waiting for the request status to resolve as success, i.e: statusCode = 200
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  test('failure query hook', async () => {
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
        query: '',
      });
    });
    // Waiting for the request status to resolve as error,
    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});
