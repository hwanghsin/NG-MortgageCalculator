interface PMTProps {
  rate: number;
  terms: number;
  amount: number;
}

export const calculatePMT = ({ rate, terms, amount }: PMTProps) => {
  const calculatedRate = rate / 100 / 12;
  const nper = terms * 12;
  const totalLoan = amount * 10000;
  const pvif = Math.pow(1 + calculatedRate, nper);
  return (calculatedRate / (pvif - 1)) * -(totalLoan * pvif);
};

export interface PrincipalProps {
  month: number;
  principal: number;
  interest: number;
  totalPayment: number;
}
export const calculateEqualPrincipal = ({ rate, terms, amount }: PMTProps) => {
  let actualAmount = amount * 10000;
  const principal = actualAmount / (terms * 12);

  return [...Array(terms * 12).keys()].reduce((prev, month) => {
    let interest = actualAmount * (rate / 12);
    let totalPayment = principal + interest;

    actualAmount -= principal;
    return [
      ...prev,
      { month: month + 1, principal: principal, interest, totalPayment },
    ];
  }, [] as PrincipalProps[]);
};
