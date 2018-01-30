import styled from 'styled-components';
import {media} from './responsive-utils';
import flex from './flex';

export const SectionTitle = styled.h3`
  font-size: 35px;
  font-weight: 100;
  margin: 0 0 20px 0;
  color: white;
  font-weight: 300;
  padding-bottom: 5px;
  position: relative;
  &:before {
    content: "";
    width: 25px;
    height: 25px;
    border-radius: 100%;
    color: white;
    background-color: white;
    position: absolute;
    left: -85px;
    border: 5px solid #333959;
    ${media.phoneM`
      left: -45px;
    `}
  }
  &:first-of-type:before {
    top: -1px;
  }

  ${media.phoneM`
    font-size: 20px;
  `}
`;

export const Wrapper = styled.div`
  margin-bottom: 100px;
`;

export const UnorderedList = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 18px;
  list-style-type: none;
  margin: 10px 0;
  font-weight: 100;
  line-height: 25px;
  ${media.phoneM`
    font-size: 16px;
  `}
`;

export const UnderlinedLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover, &:visited, &:active, &:link {
    color: white;
    text-decoration: none;
  };
  ${props => props.href && 
    `border-bottom: 1px dashed rgba(255, 255, 255, 0.6);
  `}
  padding-bottom: 1px;
`;

export const Content = styled.div`
  color: white;
  text-decoration: none;
  padding-bottom: 1px;
`;


export const Nav = styled.div`
  height:55px;
  background: #2b304c;
  z-index: 10;
  display: flex;
  width: 100vw;
  ${flex.centerHorizontalV}
  ${flex.centerHorizontalH}
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