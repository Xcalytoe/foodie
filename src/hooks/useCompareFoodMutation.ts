/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../lib/axios/axiosInstance';

interface IContact {
  name: string;
  email: string;
  message: string;
}
interface IError {
  response: { data: string };
}
export const useCompareFoodMutation = () => {
  return useMutation(
    async (values: IContact): Promise<any> => {
      const url = process.env.NEXT_PUBLIC_CONTACT_URL;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const userId = process.env.NEXT_PUBLIC_PUBLIC_KEY;

      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: userId,
        template_params: {
          ...values,
        },
      };

      const response = url && (await axiosInstance.post(url, data));
      return response;
    },
    {
      onError: (error: IError) => {
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
