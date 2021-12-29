import store from "@/store";

export const ageCalculator = (): number => {
  const DateDifference = new Date(
    new Date().valueOf() - new Date(1999, 7, 7).valueOf()
  );
  const AgeInMilliseconds = DateDifference.getTime();
  return AgeInMilliseconds / (1000 * 60 * 60 * 24 * 365);
};

export const continueCalculation = (): void => {
  setInterval(() => {
    store.commit("saveAge", ageCalculator());
  }, 1);
};
