import styled from 'styled-components';
import flex from 'styles/flex';

export const Wrapper = styled.div`
  ${flex.vertical}
  background-color: #333959;
  color: white;
`;

export const Main = styled.div`
  ${flex.spaceAround}
  ${flex.centerHorizontalH}
  margin-top:2em;
  @media (min-width: 320px) and (max-width: 480px) {
    ${flex.vertical} 
    padding:0 0;
    margin-top:5em;
    overflow-y: hidden; 
  }
`;

export const Sides = styled.div`
  ${flex.horizontal}
  @media (min-width: 320px) and (max-width: 480px) {
    ${flex.vertical}  
    ${flex.centerHorizontalH}
  }
`;
export const Left = styled.div`
  width: auto;
  min-width: 300px;
  min-height: calc(100vh - 50px);
  @media (min-width: 320px) and (max-width: 480px) {
    ${flex.centerHorizontalH}
    min-height: calc(100vh - 130px);
  }
`;

export const Right = styled.div`
`


