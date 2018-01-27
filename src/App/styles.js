import styled from 'styled-components';
import flex from 'styles/flex';
export const Wrapper = styled.div`
  ${flex.vertical}
`;
export const Nav = styled.div`
  
`
export const Main = styled.div`
  ${flex.horizontal}
  ${flex.spaceAround}
  margin-top:2em;
`
export const Sides = styled.div`
  ${flex.horizontal}
`
export const Left = styled.div`
  width: auto;
  min-width: 300px;
  min-height: calc(100vh - 50px);
`
export const Right = styled.div`
`

