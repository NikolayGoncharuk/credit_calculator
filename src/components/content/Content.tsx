import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// Components
import SimpleCalc from './simple-calc/SimpleCalc';

const useStyles = makeStyles({
  titleWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});

export default function Content() {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  const handleTabs = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Container>
      <div className={classes.titleWrapper}>
        <div>
          <Typography variant="h3">Кредитный калькулятор</Typography>
        </div>
        <div>
          <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleTabs}
          >
            <Tab label="Простой" />
            <Tab label="Расширенный" />
          </Tabs>
        </div>
      </div>
      <Divider />
      <SimpleCalc />
    </Container>
  );
};