/* eslint-disable @typescript-eslint/no-explicit-any */
import create from 'zustand';

const SEARCH_DATA = '__search_data';
interface IStore {
  searchData: any;
  addToStore: (val: any) => void;
  clearStore: () => void;
}

export const useSearchData = create<IStore>((set) => {
  let initialState;
  if (typeof window !== 'undefined') {
    const dataString = localStorage.getItem(SEARCH_DATA);
    initialState = JSON.parse(dataString as string) ?? {};
  }
  return {
    searchData: initialState,

    addToStore: (val) =>
      set((state) => {
        //   Save to local storage
        window?.localStorage.setItem(SEARCH_DATA, JSON.stringify(val));
        return {
          searchData: val,
        };
      }),
    clearStore: () =>
      set(() => {
        //   Save to local storage
        window?.localStorage.setItem('cartItems', JSON.stringify({}));
        return {
          searchData: {},
        };
      }),
  };
});
