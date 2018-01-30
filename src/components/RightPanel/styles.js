import styled from 'styled-components';
import {media} from 'styles/responsive-utils';

export const Wrapper = styled.div`
  color: white;
  border-left: 5px solid rgba(255, 255, 255, 0.5);
  padding-left: 70px;
  padding-right: 20px;
  margin-left: 20px;
  position: relative;
  ${media.phoneM`
    padding-left: 30px;
  `}
`;