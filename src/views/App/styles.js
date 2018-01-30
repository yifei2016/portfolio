import styled from 'styled-components';
import flex from 'styles/flex';

export const Wrapper = styled.div`
  ${flex.vertical}
`;

export const Nav = styled.div`
  height:55px;
  background: #2b304c;
  z-index: 10;
  display: flex;
  ${flex.centerHorizontalV}
  ${flex.centerHorizontalH}
  line-height: 37px;
`;

export const NavCv = styled.a`
  color: white;
  text-decoration: none;
  &:link, &:visited {
    text-decoration: none;
    color: white;
  }
  &:after{
    content: '/';
    margin: 0 30px;
  }
`;
export const NavLetter = styled.a`
  color: white;
  text-decoration: none;
  &:link, &:visited {
    text-decoration: none;
    color: white;
  }
`;

export const Main = styled.div`
  padding:0 200px;
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


