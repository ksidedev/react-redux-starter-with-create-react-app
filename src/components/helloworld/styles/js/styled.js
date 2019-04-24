import styled from 'styled-components';
import HelloWorld from '../../HelloWorld';

export const HelloWorldStyled = styled(HelloWorld)`
  background: red;
  padding: 5px 10px;
  cursor: pointer;
  p {
    color: white;
    font-size: 18px;
    font-weight: normal;
  }
  `;

export default HelloWorldStyled;
