import styles from "./portfolio.module.css";

const sprachen = [
  {
    name: "Java",
    image: "techStackIcons/java.png",
  },
  {
    name: "Python",
    image: "techStackIcons/python.png",
  },
  {
    name: "Java Script",
    image: "techStackIcons/js.png",
  },
  {
    name: "TypeScript",
    image: "techStackIcons/typescript.png",
  },
  {
    name: "c",
    image: "techStackIcons/c.png",
  },
];

const web = [
  {
    name: "React",
    image: "techStackIcons/reactjs.png",
  },
  {
    name: "Angular",
    image: "techStackIcons/angular.png",
  },
  {
    name: "HTML",
    image: "techStackIcons/html5.png",
  },
  {
    name: "CSS",
    image: "techStackIcons/css3.png",
  },
];

const technologien = [
  {
    name: "Node.js",
    image: "techStackIcons/nodejs.png",
  },
  {
    name: "NestJS",
    image: "techStackIcons/nestjs.png",
  },
  {
    name: "Postgresql",
    image: "techStackIcons/postgresql.png",
  },
  {
    name: "Docker",
    image: "techStackIcons/docker.png",
  },
];

const tools = [
  {
    name: "Git",
    image: "techStackIcons/git.png",
  },
  {
    name: "Postman",
    image: "techStackIcons/postman.png",
  },
  {
    name: "Figma",
    image: "techStackIcons/figma.png",
  },
  {
    name: "Visual Studio Code",
    image: "techStackIcons/vscode.png",
  },
];

export const Portfolio = () => {

  return (
    <div className={styles.site}>
      <div className={styles.navigationBox}>

        <a className={styles.navigationItem} href="#intro">
          Intro
        </a>
        <a className={styles.navigationItem} href="#technologieen">
          Technologien
        </a>
        <a className={styles.navigationItem} href="#projekte">
          Projekte
        </a>
      </div>

      <div className={styles.pagerIntro} id="intro">
        <div className={styles.headerBox} >
          <img src="jonas.JPEG" alt="" className={styles.headerImage} />
          <div className={styles.headerTextBox}>
            <span className={styles.headerTitle}>Jonas Neu</span>
            <span className={styles.headerSubTitle}>
              Software Engineering Student
            </span>

            <span className={styles.headerText}>
              Herzlich willkommen auf meinem Portfolio! Ich lade Sie ein,
              weiterzuscrollen, um mehr über meine gesammelten Erfahrungen in der
              Softwareentwicklung sowie die Technologien und Projekte zu erfahren,
              die ich im Laufe meines Studiums erfolgreich umgesetzt habe.
            </span>
          </div>
        </div>
      </div>

      <div className={styles.pagerTechnologies} id="technologieen">
        <span className={styles.technologieHeader}>
          Damit habe ich schon gearbeitet.
        </span>
        <div className={styles.technologiesListBox}>
          <div className={styles.techStack}>
            <span className={styles.technologieTitle}>Sprachen</span>
            {sprachen.map((sprache, index) => (
              <div key={index} className={styles.techStackItem}>
                <img
                  src={sprache.image}
                  alt={sprache.name}
                  className={styles.techStackImage}
                />
                <span className={styles.techStackTitle}>{sprache.name}</span>
              </div>
            ))}
          </div>

          <div className={styles.techStack}>
            <span className={styles.technologieTitle}>Technologien</span>
            {technologien.map((technologie, index) => (
              <div key={index} className={styles.techStackItem}>
                <img
                  src={technologie.image}
                  alt={technologie.name}
                  className={styles.techStackImage}
                />
                <span className={styles.techStackTitle}>
                  {technologie.name}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.techStack}>
            <span className={styles.technologieTitle}>Web</span>
            {web.map((web, index) => (
              <div key={index} className={styles.techStackItem}>
                <img
                  src={web.image}
                  alt={web.name}
                  className={styles.techStackImage}
                />
                <span className={styles.techStackTitle}>{web.name}</span>
              </div>
            ))}
          </div>

          <div className={styles.techStack}>
            <span className={styles.technologieTitle}>Tools</span>
            {tools.map((tool, index) => (
              <div key={index} className={styles.techStackItem}>
                <img
                  src={tool.image}
                  alt={tool.name}
                  className={styles.techStackImage}
                />
                <span className={styles.techStackTitle}>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.pagerProjekte} id="projekte">
        <div className={styles.projectsBox}>
          <div className={styles.projectContainer}>
            <img src="projects/barstool1.png" alt=""
              className={styles.projectImage0} />
            <img src="projects/barstool2.png" alt=""
              className={styles.projectImage1} />
            <div className={styles.projectDescription}>
              <span className={styles.projectTitle}>Barstool</span>
              <span className={styles.e}>Barstool ist ein Tool zum finden einer Location zum lernen außerhalb der Öffnungszeiter der Universitäts Bibliothek.</span>
              <a href="http://barstool.jonasneu.de/">besuchen</a>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <img src="projects/portfolio1.png" alt=""
              className={styles.projectImage0} />
            <img src="projects/portfolio2.png" alt=""
              className={styles.projectImage1} />
            <div className={styles.projectDescription}>
              <span className={styles.projectTitle}>Portfolio</span>
              <span className={styles.e}>
                Mein persönliches Portfolio ist ein Proof-of-Concept-Projekt,
                das meine bisherigen Erfahrungen und Arbeiten auf eine einzigartige
                und interaktive Weise präsentiert. Es ist als ein fiktives Betriebssystem
                gestaltet und visuell an Windows NT 4.0 angelehnt, um eine nostalgische,
                aber dennoch moderne Benutzererfahrung zu bieten.

                Beim Start öffnet sich eine Übersichtsseite mit Header, Technologien und
                Projekten, während das Betriebssystem frei erkundet werden kann
                – inklusive versteckter Secrets.
              </span>
              <a href="#">besuchen</a>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <img src="projects/timetracker1.png" alt=""
              className={styles.projectImage0} />
            <img src="projects/timetracker2.png" alt=""
              className={styles.projectImage1} />
            <div className={styles.projectDescription}>
              <span className={styles.projectTitle}>Timetracker</span>
              <span className={styles.e}>
                Eine API, welche Zeiten von einem NFC-Lesegerät empfängt, validiert und in einer Datenbank ablegt. Ebenso gibt es ein Frontend zum Visualisieren der Daten.
              </span>
              <a href="http://portfolio.jonasneu.de/">besuchen</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
