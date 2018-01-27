import React from 'react';
import {Wrapper} from './styles';
import WhoIAm from 'components/WhoIAm';
import WhatImUpTo from 'components/WhatImUpTo';

const RightPanel = (props) => (
  <Wrapper>
    <WhoIAm/>
    <WhatImUpTo/>
  </Wrapper>
)
 

export default RightPanel;