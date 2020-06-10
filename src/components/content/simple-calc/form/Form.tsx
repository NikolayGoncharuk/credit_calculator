import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  formWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  formControl: {
    width: '30%',
    minWidth: '250px',
  },
});

export default function Form(props: any) {
  const { sum, setSum, percent, setPercent, time, setTime, setCalc } = props;
  const classes = useStyles();

  const handleSum = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSum(Number(event.target.value));
  };
  const handlePercent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPercent(Number(event.target.value));
  };
  const handleTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(Number(event.target.value));
  };

  const handleCalc = () => setCalc(true);
  const handleClear = () => {
    setSum(0);
    setPercent(0);
    setTime(0);
    setCalc(false);
  };

  return (
    <form>
      <div className={classes.formWrapper}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="credit-sum">Сумма кредита</InputLabel>
          <Input
            id="credit-sum"
            placeholder="1 450 000"
            value={sum ? sum : ''}
            onChange={handleSum}
            endAdornment={<InputAdornment position="end">рублей</InputAdornment>}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="credit-percent">Процентная ставка</InputLabel>
          <Input
            id="credit-percent"
            placeholder="24"
            value={percent ? percent : ''}
            onChange={handlePercent}
            endAdornment={<InputAdornment position="end">процентов</InputAdornment>}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="credit-time">Срок кредитования</InputLabel>
          <Input
            id="credit-time"
            placeholder="60"
            value={time ? time : ''}
            onChange={handleTime}
            endAdornment={<InputAdornment position="end">месяцев</InputAdornment>}
          />
        </FormControl>
      </div>
      <div>
        <Button onClick={handleCalc} variant="contained">Рассчитать</Button>
        <Button onClick={handleClear} variant="contained">Очистить</Button>
      </div>
    </form>
  );
};