import React from 'react';
import {Wrapper,Main,ProfileImage,SocialIcons,Icon,Title,Description} from 'components/YifeiInfo/styles';
import SocialIcon from 'components/SocialIcon';
import {links, textLinks, socialIcons} from 'components/SocialIcon/data';
const YifeiInfo = () => (
  <Wrapper>
     <ProfileImage src="../img/profile.jpg" alt="wrong" />
     <Title>Hi, I am Yifei.</Title>
     <Description>I make stuff happen.</Description>
     <SocialIcons>
       {socialIcons.map((icon,key) => <SocialIcon icon={icon} ></SocialIcon>)}
     </SocialIcons>
  </Wrapper>     
);

export default YifeiInfo;

