import moomla from '@/assets/images/projects/moomla.png';
import { ProjectImage, ProjectInfo, SectionTitle } from '@/common/components/Experience';
import ProjectTable from '@/common/components/ProjectTable';

function MoomlaHeader() {
  return (
    <>
      <h2 align="center">Moomla CMS</h2>
      <SectionTitle>Project Info:</SectionTitle>

      <ProjectInfo>
        <ProjectImage src={moomla} alt="Moomla Logo" width={150} />

        <div>
          <ProjectTable
            title="Fullstack Developer"
            stack={(
              <div>
                <div>Front-end - React, Handlebars</div>
                <div>Back-end - Nodejs, MongoDB</div>
              </div>
            )}
          />

          <p>MERN application.</p>
          <p><i>Examination project while passing JavaScript course in It-Academy.</i></p>
        </div>
      </ProjectInfo>
    </>
  );
}

export default MoomlaHeader;
