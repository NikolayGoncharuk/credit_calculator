import React from 'react';
// Styled Components
import Typography from '@material-ui/core/Typography';

export default function CalcResult(props: any) {
  const { sum, percent, time, calc } = props;
  let fixed = 2;

  const calcPay = () => {
    if (calc) {
      return (sum * ((percent / 100) / 12) / (1 - (1 / (1 + ((percent / 100) / 12)) ** time)));
    };
  };

  const calcSumPay = () => {
    if (calc) {
      return (calcPay()! * time);
    };
  };

  const calcSumPercent = () => {
    if (calc) {
      return (calcSumPay()! - sum);
    };
  };

  return (
    <div>
      <Typography>Сумма ежемесячного платежа: {calcPay()!.toFixed(fixed)}</Typography>
      <Typography>Сумма выплат: {calcSumPay()!.toFixed(fixed)}</Typography>
      <Typography>Сумма процентов: {calcSumPercent()!.toFixed(fixed)}</Typography>
    </div>
  );
};