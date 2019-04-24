import React from 'react';
import { Button } from 'antd';
import MuiButton from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import HelloWorld from '../helloworld/HelloWorld';
import './styles/scss/styles.scss';
import { helloWorldFlights } from '../../utils/helloWorldFlights';
import ApiComponents from '../apicomponent/ApiComponent';


const LandingPage = () => (
  <div className="landing-page">
    <header className="landing-page-header">
      <h1>Ant design button</h1>
      <Button type="primary">Hello world</Button>

      <h1>Styled component with redux</h1>
      <HelloWorld />

      <h1>
        Utility:
        {helloWorldFlights('Utility is ')}
      </h1>

      <h1>API Calls</h1>
      <ApiComponents />

      <h1>Material UI buton</h1>
      <MuiButton variant="contained" color="primary">Hello world</MuiButton>

      <h1>Material UI icon</h1>
      <Icon color="secondary">add_circle</Icon>
    </header>
  </div>);

export default LandingPage;
