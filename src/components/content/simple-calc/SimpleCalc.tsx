import React from 'react';
// Components
import Form from './form/Form';
import CalcResult from './calc-result/CalcResult';

export default function SimpleCalc() {
  const [sum, setSum] = React.useState(0);
  const [percent, setPercent] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [calc, setCalc] = React.useState(false);

  return (
    <div>
      <p>Кредитный калькулятор поможет рассчитать кредит за 3 простых шага. Просто введите сумму, процентную ставку и срок кредитования.</p>
      <Form
        sum={sum}
        setSum={setSum}
        percent={percent}
        setPercent={setPercent}
        time={time}
        setTime={setTime}
        setCalc={setCalc}
      />
      {calc && <CalcResult
        sum={sum}
        percent={percent}
        time={time}
        calc={calc}
      />}
    </div>
  );
};