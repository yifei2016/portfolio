import React from 'react';
import {Wrapper, Header, Content, SectionTitle, UnorderedList, UnderlinedLink, ListItem} from './styles';
import {links, textLinks, socialIcons} from 'components/SocialIcon/data';
const Summary = ({title})=>(
  <Wrapper>
    <SectionTitle>Who?</SectionTitle>
    <Content>
      <UnorderedList>
        {textLinks.map((textLink) => <ListItem key={textLink.href}>
          <UnderlinedLink target="_blank" href={textLink.href}>
            {textLink.title}
          </UnderlinedLink>
        </ListItem>
        )}
      </UnorderedList>  
    </Content>
  </Wrapper>
)

export default Summary;