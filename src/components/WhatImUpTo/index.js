import React from 'react';
import {Wrapper, Header, Content, SectionTitle, UnorderedList, UnderlinedLink, ListItem} from 'styles/styled-components';

const WhatImUpTo = (props) => (
  <Wrapper>
    <SectionTitle>What I'm up to</SectionTitle>
    <Content>
      <UnorderedList>
        {["Making products", "Traveling the world", "Tweeting like there's no tomorrow!"]
        .map(text => {
          return <ListItem>
            <UnderlinedLink target="_blank">
            {text}
          </UnderlinedLink>
          </ListItem>
        })}
      </UnorderedList>
    </Content>
  </Wrapper>
);

export default WhatImUpTo;




