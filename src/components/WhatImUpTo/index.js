import React from 'react';
import {Wrapper, Header, Content, SectionTitle, UnorderedList, UnderlinedLink, ListItem} from 'styles/styled-components';

const WhatImUpTo = (props) => (
  <Wrapper>
    <SectionTitle>What I'm up to</SectionTitle>
    <Content>
      <UnorderedList>
        <ListItem >
          <UnderlinedLink target="_blank" href="https://github.com/yifei2016">
            Making products
            </UnderlinedLink>
        </ListItem>
        <ListItem>
          Traveling the world
            </ListItem>
      </UnorderedList>
    </Content>
  </Wrapper>
);

export default WhatImUpTo;




