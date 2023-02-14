import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import CompareForm from '.';
// import user from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import userEvent from '@testing-library/user-event';

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('Compare Foods Form', () => {
  render(<CompareForm />, { wrapper });
  // const onSubmit = jest.fn();
  test.only('form is visible', async () => {
    expect(screen.getByLabelText('comparism-form')).toBeInTheDocument();
  });
  test('renders basic form fields', async () => {
    expect(await getQuery()).toBeInTheDocument();
    expect(await getSubmitBtn()).toBeInTheDocument();
  });
  // test.only('should validate form fields', async () => {
  //   // render(<CompareForm />);

  //   await userEvent.type(await getQuery(), 'data');
  //   await userEvent.click(await getSubmitBtn());
  //   await waitFor(() => {
  //     expect(onSubmit).toHaveBeenCalledWith({ query: 'data' });
  //   });
  //   expect(onSubmit).toHaveBeenCalledTimes(0);
  // });
  // test.only('has some required fields', async () => {
  //   // render(<CompareForm />);
  //   userEvent.click(await getSubmitBtn());
  //   await waitFor(async () => {
  //     expect(await getQuery()).toHaveErrorMessage('Field should not be empty');
  //   });
  // });
});

const getSubmitBtn = async () =>
  screen.findByRole('button', { name: /Calculate Foods/i });
const getQuery = async () =>
  await screen.findByRole('textbox', { name: 'query' });
