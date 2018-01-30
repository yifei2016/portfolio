import React from 'react';
import {Wrapper, SectionTitle, UnorderedList} from 'styles/styled-components';
//projects
import SoloChat from 'components/projects/SoloChat';
import ClientZone from 'components/projects/ClientZone';
import BannerPreview from 'components/projects/BannerPreview';
import CssAnimation from 'components/projects/CssAnimation';
import Signatur from 'components/projects/Signatur';
import Lexikon from 'components/projects/Lexikon';
import Bilar from 'components/projects/Bilar';
import AutentiseringSidan from 'components/projects/AutentiseringSidan';
import SorteringFirebase from 'components/projects/SorteringFirebase';
import JestTest from 'components/projects/JestTest';
import MapGo from 'components/projects/MapGo';
import GuessingGame from 'components/projects/GuessingGame';
import PythonTasks from 'components/projects/PythonTasks';


const ProudProjects = (props) => (
  <Wrapper id="projects" className="animated fadeInDown">
    <SectionTitle> Projects I'm proud of </SectionTitle>
    <UnorderedList>
      <SoloChat/>
      <ClientZone/>
      <PythonTasks/>
      <BannerPreview/>
      <Signatur/>
      <Lexikon/>
      <CssAnimation/>
      <Bilar/>
      <AutentiseringSidan/>
      <SorteringFirebase/>
      <JestTest/>
      <MapGo/>
      <GuessingGame/>
    </UnorderedList>
  </Wrapper>
)
 
export default ProudProjects;