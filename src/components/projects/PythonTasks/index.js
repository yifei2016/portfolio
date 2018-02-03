import React from 'react';
import {UnderlinedLink} from 'styles/styled-components';
import {Point, KeywordsTitle, Keywords} from 'components/Project/styles';
import Project from 'components/Project';

const PythonTasks = () => (
  <Project href="https://github.com/yifei2016/python_programming" title="PythonTasks">
    <Point>
    Jag använde anonym funktion av python och higher order funktioner osv i tasks. Kod är välgjort  av komment och strukturerad.
    </Point>
    <Point>
      <KeywordsTitle>Nyckelord:</KeywordsTitle>&nbsp;&nbsp;
      <Keywords>Python, Git, GitHub.</Keywords>
    </Point>
  </Project>
);

export default PythonTasks;