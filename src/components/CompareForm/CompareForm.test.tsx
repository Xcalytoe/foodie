/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import CompareForm from '.';

// const queryClient = new QueryClient();
// const wrapper = ({ children }: { children: any }) => (
//   <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
// );

// Solves TypeScript Errors
// const mockedUseProduct = useProduct as jest.Mock<any>;

// Mock the module
jest.mock('../../pages/__tests__/__mocks__/matchMedia.mock');

describe('Compare Foods Form', () => {
  const onSubmit = jest.fn();
  //   global.process.env = {
  //     REACT_APP_BASE_URL: 'https://example.com/api',
  //     REACT_APP_TEST_KEY: 'my-test-key',
  //   };
  beforeEach(() => {
    onSubmit.mockClear();
    render(<CompareForm />);
  });
  it('renders basic form fields', async () => {
    expect(await getQuery()).toBeInTheDocument();
    expect(await getSubmitBtn()).toBeInTheDocument();
  });

  // it('should validate form fields', async () => {
  //   await user.type(await getQuery(), 'cosmas');
  //   await user.click(await getSubmitBtn());
  //   await waitFor(() => {
  //     expect(onSubmit).toHaveBeenCalledWith({ socialUsername: 'cosmas' });
  //   });
  //   expect(onSubmit).toHaveBeenCalledTimes(1);
  // });
  it('has some required fields', async () => {
    await user.click(await getSubmitBtn());
    await waitFor(async () => {
      expect(await getQuery()).toHaveErrorMessage('Field should not be empty');
    });
  });
});

const getSubmitBtn = async () =>
  await screen.findByRole('button', { name: 'Calculate Foods' });
const getQuery = async () =>
  await screen.findByRole('textbox', { name: 'query' });
