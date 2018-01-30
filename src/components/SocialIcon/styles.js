import styled from 'styled-components';


export const Icon = styled.div.attrs({
  style: props =>({
    color: props.color
  })
})`
    font-size: 22px;
    opacity: 0.6;
    transition: all 100ms linear;
    margin-bottom: 15px;
    &:hover {
      opacity:1;
    }
`;

export const Link = styled.a`
  border-bottom: 0;
`;

export const Wrapper =styled.div`
    display: inline-block;
    margin: 0 10px;
`;