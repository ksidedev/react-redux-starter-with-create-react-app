import React from 'react';
import { Header } from './styles/js/styled';
import HelloWorld from '../helloworld/HelloWorldContainer';
import './styles/scss/styles.scss';
import { exampleUtils } from '../../utils/exampleUtils';
import RequestData from '../RequestData/RequestDataContainer';


const LandingPage = () => (
  <div className="landing-page">
    <div className="block">
      <HelloWorld />
    </div>

    <div className="block">
      <h5>
        Utility:
        <br />
        {exampleUtils('Utility is ')}
      </h5>
    </div>

    <div className="block">
      <h5>Request Data</h5>
      <RequestData />
    </div>

    <div className="block">
      <Header> Styled Component Example </Header>
    </div>
  </div>);

export default LandingPage;
