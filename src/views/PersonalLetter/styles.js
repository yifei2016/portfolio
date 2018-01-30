import styled from 'styled-components';
import flex from 'styles/flex';

export const Wrapper = styled.div`
  ${flex.vertical}
  background-color: white;
  color: grey;
`;

export const Main = styled.div` 
  ${flex.horizontal}
  ${flex.centerHorizontalH}
  margin: 2em 0;
  @media (min-width: 320px) and (max-width: 480px) {
    ${flex.vertical} 
    padding:0 0;
    overflow-y: hidden; 
  }
  color: rgb(87, 98, 107);
  font-weight: 300;
  line-height: 25px;
`;

export const Sides = styled.div`
  ${flex.horizontal}
  ${flex.spaceAround}
  width: 70vw;
  @media (min-width: 320px) and (max-width: 480px) {
    ${flex.vertical} 
    width: 100vw;
  }
`;

export const Left = styled.div`
  width: auto;
  min-width: 300px;
  @media (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 2em;
  }
`;

export const Right = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalH}
  padding: 0 15px;
`


