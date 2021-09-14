
import './App.css';
import React from 'react';
import { NavbarTemplates } from './container/Templates/NavbarTemplates';
import Experience from './component/Organisms/Experience';
import Education from './component/Organisms/Education';
import Skills from './component/Organisms/Skills';
import Interest from './component/Organisms/Interest';
import Award from './component/Organisms/Award';
import { Hr } from './component/Atoms/Hr';
import About from './component/Organisms/About';
import { AboutObj, AwardObj, EducationObj, ExperienceObj, InterestObj, SkillsObj } from './component/Organisms/Data';


const App = () => {
 
  return (
      <>
          <NavbarTemplates/>
          <About {...AboutObj}/>
          <Hr/>
          <Experience {...ExperienceObj}/>
          <Hr/>
          <Education {...EducationObj}/>
          <Hr/>
          <Skills {...SkillsObj} />
          <Hr/>
          <Interest {...InterestObj}/>
          <Hr/>
          <Award {...AwardObj}/>
      </>

  );
}

export default App;
