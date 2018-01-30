import React from 'react';
import {Wrapper, SectionTitle, ListItem, UnderlinedLink, UnorderedList} from 'styles/styled-components';

const Fitness = () => (
  <Wrapper className="animated fadeInDown">
    <SectionTitle> Fitness - Interests</SectionTitle>
    <UnorderedList>
      <ListItem>
        <span> Completely healthy with good mood </span>
      </ListItem>
      <ListItem>
       Play Badminton
      </ListItem>
      <ListItem>
        Dance on the ice 😜
        <span> </span>
      </ListItem>
    </UnorderedList>
  </Wrapper>
);

export default Fitness;