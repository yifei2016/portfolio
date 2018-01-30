import React from 'react';
import {Wrapper} from './styles';
import WhoIAm from 'components/WhoIAm';
import WhatImUpTo from 'components/WhatImUpTo';
import ProudProjects from 'components/ProudProjects';
import Technologies from 'components/Technologies';
import Fitness from 'components/Fitness';

const RightPanel = (props) => (
  <Wrapper>
    <WhoIAm/>
    <WhatImUpTo/>
    <ProudProjects/>
    <Technologies/>
    <Fitness/>

    <div className='btn-cont'>
      <a className='btn' href='https://github.com/yifei2016'> View my code
        <span className='line-1'></span>
        <span className='line-2'></span>
        <span className='line-3'></span>
        <span className='line-4'></span>
      </a>
    </div>
  </Wrapper>
)
 

export default RightPanel;