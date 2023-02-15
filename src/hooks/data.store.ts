/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

const SEARCH_DATA = '__search_data';
interface IStore {
  searchData: any;
  addToStore: (val: object) => void;
  pinToStore: (val: object) => void;
  clearStore: () => void;
}

export const usePinState = create<{ pinState: any }>((set) => {
  let initialState;
  if (typeof window !== 'undefined') {
    const dataString = localStorage.getItem(SEARCH_DATA);
    initialState = JSON.parse(dataString as string) ?? {};
  }
  return {
    pinState: initialState,
  };
});

export const useSearchData = create<IStore>((set) => {
  let initialState;
  if (typeof window !== 'undefined') {
    const dataString = localStorage.getItem(SEARCH_DATA);
    initialState = JSON.parse(dataString as string) ?? {};
  }
  return {
    searchData: initialState,
    // save in state
    addToStore: (val) =>
      set((state) => {
        return {
          searchData: val,
        };
      }),
    // save to storage
    pinToStore: (val) =>
      set((state) => {
        //   Save to local storage
        window?.localStorage.setItem(SEARCH_DATA, JSON.stringify(val));
        return {
          searchData: val,
        };
      }),
    clearStore: () =>
      set((state) => {
        //   Save to local storage
        window?.localStorage.setItem(SEARCH_DATA, JSON.stringify({}));
        console.log(state, 'searchData');
        return {
          searchData: state.searchData,
        };
      }),
  };
});
