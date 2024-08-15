import React from 'react';
import './About.css';

// Imágenes en src/assets/icons/
import pythonImg from '../assets/icons/python.png';
import jsImg from '../assets/icons/js.png';
import htmlImg from '../assets/icons/html.png';
import cssImg from '../assets/icons/css.png';
import phpImg from '../assets/icons/php.png';
import javaImg from '../assets/icons/java.png';
import sqlImg from '../assets/icons/mysql.png';
import gitImg from '../assets/icons/git.png';
import githubImg from '../assets/icons/github.png';
import bootstrapImg from '../assets/icons/bootstrap.png';
import msOfficeImg from '../assets/icons/ms-office.png';
import vsCodeImg from '../assets/icons/vs-code.png';
import visualStudioImg from '../assets/icons/visual-studio.png';
import sqlServerImg from '../assets/icons/sql-server.png';
import powerBiImg from '../assets/icons/power-bi.png';
import tableauImg from '../assets/icons/tableau.png';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1 className="about-heading">Sobre Mí</h1>
        <p className="about-paragraph">
          Soy un desarrollador web con experiencia en una variedad de tecnologías y lenguajes. Mi pasión por el desarrollo y la tecnología me impulsa a crear soluciones innovadoras y eficaces. A lo largo de mi carrera, he trabajado en varios proyectos que me han permitido desarrollar habilidades técnicas y resolver problemas complejos.
        </p>
      </section>

      <section className="skills-section">
        <h2 className="skills-heading">Habilidades</h2>
        <div className="skills-container">
          {/* Columna 1 */}
          <div className="column">
            <div className="language-card">
              <h3>Idiomas</h3>
              <p>Inglés (Nivel intermedio oral y escrito)</p>
            </div>

            <div className="certifications-card">
              <h3>Certificaciones</h3>
              <ul>
                <li>Scrum Fundamentals Certified</li>
                <li>Análisis y planificación de requerimientos informáticos</li>
                <li>Inteligencia de negocios</li>
                <li>Arquitectura de software</li>
                <li>Programación de software</li>
                <li>Calidad de software</li>
              </ul>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="column">
            <div className="skills-technical">
              <div className="skills-images">
                <div className="skill-icon">
                  <img src={pythonImg} alt="Python" />
                  <span>Python</span>
                </div>
                <div className="skill-icon">
                  <img src={jsImg} alt="JavaScript" />
                  <span>JavaScript</span>
                </div>
                <div className="skill-icon">
                  <img src={htmlImg} alt="HTML" />
                  <span>HTML</span>
                </div>
                <div className="skill-icon">
                  <img src={cssImg} alt="CSS" />
                  <span>CSS</span>
                </div>
                <div className="skill-icon">
                  <img src={phpImg} alt="PHP" />
                  <span>PHP</span>
                </div>
                <div className="skill-icon">
                  <img src={javaImg} alt="Java" />
                  <span>Java</span>
                </div>
                <div className="skill-icon">
                  <img src={sqlImg} alt="SQL" />
                  <span>SQL</span>
                </div>
                <div className="skill-icon">
                  <img src={gitImg} alt="Git" />
                  <span>Git</span>
                </div>
                <div className="skill-icon">
                  <img src={githubImg} alt="GitHub" />
                  <span>GitHub</span>
                </div>
                <div className="skill-icon">
                  <img src={bootstrapImg} alt="Bootstrap" />
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>

            <div className="software-card">
              <ul>
                <li><img src={msOfficeImg} alt="MS Office" className="skill-icon" /> MS Office</li>
                <li><img src={vsCodeImg} alt="Visual Studio Code" className="skill-icon" /> Visual Studio Code</li>
                <li><img src={visualStudioImg} alt="Visual Studio" className="skill-icon" /> Visual Studio</li>
                <li><img src={sqlServerImg} alt="SQL Server" className="skill-icon" /> SQL Server</li>
                <li><img src={powerBiImg} alt="Power BI" className="skill-icon" /> Power BI</li>
                <li><img src={tableauImg} alt="Tableau" className="skill-icon" /> Tableau</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
