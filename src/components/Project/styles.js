import styled from 'styled-components';
import {ListItem} from 'styles/styled-components';
import {UnderlinedLink} from 'styles/styled-components';
import {media} from 'styles/responsive-utils';

export const Wrapper = styled(ListItem)`
    margin: 35px 0;
    ${media.phoneM`
      font-size: 16px;
    `}
`;

export const Link = styled(UnderlinedLink)`
    margin-bottom: 15px;
    padding-bottom: 10px;
    display: inline-block;
`;

export const Points = styled.div`
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: 300;
    position: relative;
    
    &:before{
      content: "";
      width: 25px;
      height: 25px;
      border-radius: 100%;
      color: white;
      background-color: #66dbff;
      position: absolute;
      left: -85px;
      top: 0px;
      border: 5px solid #333959;
      ${media.phoneM`
        left: -45px;
      `}
    }
    ${media.phoneM`
      font-size: 16px;
    `}
`;

export const Point = styled.p`
  position: relative;
  padding: 0;
  margin: 15px 0;
  line-height: 25px;
    
  &:before{
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 100%;
    color: white;
    background-color: white;
    position: absolute;
    left: -80px;
    top: 4px;
    border: 4px solid #333959;
    ${media.phoneM`
        left: -40px;
    `}
  }
`;

export const KeywordsTitle = styled.span`
  font-weight: 600;
  ${media.phoneM`
    font-size: 14px;
  `}
`;

export const Keywords = styled.span`
  ${media.phoneM`
    font-size: 14px;
  `}
`;

