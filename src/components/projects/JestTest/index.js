import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const JestTest = () => (
  <Project
    title="JestTest">
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016/jest.test.exercise" target="_blank">
      https://github.com/yifei2016/jest.test.exercise
    </UnderlinedLink>
    </Point>
    <Point>
    Den är kod till jest test som jag lärde mig i skolan, jag har flera små test övningar på github. 
    Genom test kurs skapade jag en viss förståelser: 
    TDD är viktigt för web utveckling, det kan undvika och minska eventuell bug och problem. 
    </Point>
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016" target="_blank">Nyckelord: </UnderlinedLink>
      HTML5, CSS3, JavaScript, Firebase, Git, DOM, GitHub.
    </Point>
  </Project>
);

export default JestTest;