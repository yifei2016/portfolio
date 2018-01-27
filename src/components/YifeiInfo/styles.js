import flex from 'styles/flex';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flex.vertical}
  ${flex.centerVertical}
`;

export const ProfileImage = styled.img`
  width:150px;
  border-radius: 129px;
`;
export const Title = styled.h4`
  font-size: 30px;
  font-weight: 300;
  margin: 50px 0 0px 0;
`;
export const Description = styled.p`
  margin-top: 10px;
  font-weight: 100;
  font-size: 17px;
`;
export const Icon = styled.i`
color:#7292b6;
`;
export const SocialIcons = styled.div`
  padding: 0;
  margin:15px 0 0 0;
  transition: color 0.2s;	
  &:hover ${Icon} {
    color: white;
  }
  min-width: 50%;
  ${flex.horizontal}
  ${flex.spaceAround}
`;


