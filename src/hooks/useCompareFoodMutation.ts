/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../lib/axios/axiosInstance';
import { API_ROUTES } from '../lib/routing';

interface IError {
  response: { data: string };
}
export const useCompareFoodMutation = () => {
  const { COMPARE_FOOD } = API_ROUTES;
  return useMutation(
    async (data: { query: string }): Promise<any> => {
      const response = await axiosInstance.post(COMPARE_FOOD, data);
      return response;
    },
    {
      onError: (error: IError) => {
        console.log(error, 'error');

        // const errMsg = error.response.data;
        // if (errMsg) {
        //   ToastService.error(errMsg);
        // }
      },
      onSuccess: async () => {
        // ToastService.success('Thank you for message, I will respond shortly');
      },
    }
  );
};
