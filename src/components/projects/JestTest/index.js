import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const JestTest = () => (
  <Project href="https://github.com/yifei2016/jest.test.exercise" title="JestTest">
    <Point>
    Den är kod till jest test som jag lärde mig i skolan, jag har flera små test övningar på github. 
    Genom test kurs skapade jag en viss förståelser: 
    TDD är viktigt för web utveckling, det kan undvika och minska eventuell bug och problem. 
    </Point>
    <Point>
    <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
    <Keywords>HTML5, CSS3, JavaScript, Firebase, Git, DOM, GitHub.</Keywords></Point>
  </Project>
);

export default JestTest;