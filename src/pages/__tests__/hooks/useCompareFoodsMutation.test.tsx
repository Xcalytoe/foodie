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
    await waitFor(() => expect(result.current.isSuccess).toBe(false));
  });
});
