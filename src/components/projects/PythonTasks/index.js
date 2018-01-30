import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const PythonTasks = () => (
  <Project
    title="PythonTasks">
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016/python_programming" target="_blank">
      https://github.com/yifei2016/python_programming
    </UnderlinedLink>
    </Point>
    <Point>
    Tre stycken uppgifterna gjorde jag med python programmering språk.
    </Point>
    <Point>
      <UnderlinedLink href="https://github.com/yifei2016" target="_blank">Nyckelord: </UnderlinedLink>
      Python, Git, GitHub.
    </Point>
  </Project>
);

export default PythonTasks;