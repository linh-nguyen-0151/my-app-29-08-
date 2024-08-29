import { atom, selector } from 'recoil';

export const sampleAtom = atom({
  key: 'sampleAtom',
  default: 0,
});

export const sampleSelector = selector({
  key: 'sampleSelector',
  get: ({ get }) => {
    const sampleVal = get(sampleAtom);

    return sampleVal;
  },
});
