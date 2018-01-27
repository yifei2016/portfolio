import styled from 'styled-components';

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
  }
`;
export const Header = styled.div`
// a {
//   cursor: pointer;
//   color: white;
//   transform: translate3d(-50%, -50%, 0);
//   padding: 0.4em calc(0.4em * 1.2);
//   display: inline-block;
//   border: 3px solid transparent;
//   position: relative;
//   font-size: 1.5em;
//   letter-spacing: 0.07em;
// }
// a .text {
//   font-family: proxima-nova;
//   transform: translate3d(0, 0.4em, 0);
//   display: block;
//   transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;
// }
// a:after {
//   position: absolute;
//   content: '';
//   bottom: -3px;
//   left: calc(0.4em * 1.2);
//   right: calc(0.4em * 1.2);
//   height: 3px;
//   background: #f26522;
//   z-index: -1;
//   transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;
//   transform-origin: left;
// }

// .line {
//   position: absolute;
//   background: #f26522;
// }
// .line.-right, .line.-left {
//   width: 3px;
//   bottom: -3px;
//   top: -3px;
//   transform: scale3d(1, 0, 1);
// }
// .line.-top, .line.-bottom {
//   height: 3px;
//   left: -3px;
//   right: -3px;
//   transform: scale3d(0, 1, 1);
// }
// .line.-right {
//   right: -3px;
//   transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
//   transform-origin: top;
// }
// .line.-top {
//   top: -3px;
//   transition: transform 0.08s linear 0.43s;
//   transform-origin: left;
// }
// .line.-left {
//   left: -3px;
//   transition: transform 0.08s linear 0.51s;
//   transform-origin: bottom;
// }
// .line.-bottom {
//   bottom: -3px;
//   transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);
//   transform-origin: right;
// }

// a:hover .text,
// a:active .text {
//   transform: translate3d(0, 0, 0);
//   transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
// }
// a:hover:after,
// a:active:after {
//   transform: scale3d(0, 1, 1);
//   right: -3px;
//   left: -3px;
//   transform-origin: right;
//   transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;
// }
// a:hover .line,
// a:active .line {
//   transform: scale3d(1, 1, 1);
// }
// a:hover .line.-right,
// a:active .line.-right {
//   transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;
//   transform-origin: bottom;
// }
// a:hover .line.-top,
// a:active .line.-top {
//   transition: transform 0.08s linear 0.4s;
//   transform-origin: right;
// }
// a:hover .line.-left,
// a:active .line.-left {
//   transition: transform 0.08s linear 0.48s;
//   transform-origin: top;
// }
// a:hover .line.-bottom,
// a:active .line.-bottom {
//   transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
//   transform-origin: left;
// }

`;

export const Wrapper = styled.div`

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
`;

export const UnderlinedLink = styled.a`
  color: white;
  &:hover{
    color: white;
    text-decoration: none;
  };
  text-decoration: none;
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