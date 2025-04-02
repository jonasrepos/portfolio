import styles from "./portfolio.module.css";

const skills = {
  programmiersprachen: [
    {
      name: "Java",
      image: "techStackIcons/java.png",
    },
    {
      name: "JavaScript",
      image: "techStackIcons/js.png",
    },
    {
      name: "TypeScript",
      image: "techStackIcons/typescript.png",
    },
    {
      name: "C",
      image: "techStackIcons/c.png",
    },
    {
      name: "Python",
      image: "techStackIcons/python.png",
    },
  ],
  frontend: [
    {
      name: "React",
      image: "techStackIcons/reactjs.png",
    },
    {
      name: "Angular",
      image: "techStackIcons/angular.png",
    },
  ],
  backend: [
    {
      name: "NestJS (REST)",
      image: "techStackIcons/nestjs.png",
    },
    {
      name: "Spring",
      image: "techStackIcons/spring-3.svg",
    },
    {
      name: "RabbitMQ (MQTT)",
      image: "techStackIcons/rabbitmq.svg",
    },
  ],
  datenbanken: [
    {
      name: "Postgresql",
      image: "techStackIcons/postgresql.png",
    },
    {
      name: "MongoDB",
      image: "techStackIcons/mongodb.svg",
    },
  ],
  devOps_Tools: [
    {
      name: "Git",
      image: "techStackIcons/git.png",
    },
    {
      name: "Docker",
      image: "techStackIcons/docker.png",
    },
    {
      name: "Figma",
      image: "techStackIcons/figma.png",
    },
  ],
};

const projects = [
  {
    name: "Barstool",
    images: ["projects/barstool1.png", "projects/barstool2.png"],
    logo: "projects/barstoolLogo.svg",
    description:
      "Barstool ist ein Tool zum Finden einer Location zum Lernen außerhalb der Öffnungszeiten der Universitätsbibliothek.",
    link: "http://barstool.jonasneu.de/",
  },
  {
    name: "Portfolio",
    images: ["projects/portfolio1.png", "projects/portfolio2.png"],
    logo: "projects/portfolioLogo.svg",
    description:
      "Mein persönliches Portfolio ist ein Proof-of-Concept-Projekt, das meine bisherigen Erfahrungen und Arbeiten auf eine einzigartige und interaktive Weise präsentiert. Es ist als ein fiktives Betriebssystem gestaltet und visuell an Windows NT 4.0 angelehnt.",
    link: "#",
  },
  {
    name: "Timetracker",
    images: ["projects/timetracker1.png", "projects/timetracker2.png"],
    logo: "projects/timetrackerLogo.svg",
    description:
      "Eine API, welche Zeiten von einem NFC-Lesegerät empfängt, validiert und in einer Datenbank ablegt. Ebenso gibt es ein Frontend zum Visualisieren der Daten.",
    link: "http://portfolio.jonasneu.de/",
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
        <div className={styles.headerBox}>
          <img src="jonas.JPEG" alt="" className={styles.headerImage} />
          <div className={styles.headerTextBox}>
            <span className={styles.headerTitle}>Jonas Neu</span>
            <span className={styles.headerSubTitle}>
              Software Engineering Student
            </span>

            <span className={styles.headerText}>
              Herzlich willkommen auf meinem Portfolio! Ich lade Sie ein,
              weiterzuscrollen, um mehr über meine gesammelten Erfahrungen in
              der Softwareentwicklung sowie die Technologien und Projekte zu
              erfahren, die ich im Laufe meines Studiums erfolgreich umgesetzt
              habe.
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
            {skills.programmiersprachen.map((sprache, index) => (
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
            <span className={styles.technologieTitle}>Frontend</span>
            {skills.frontend.map((technologie, index) => (
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
            <span className={styles.technologieTitle}>Backend</span>
            {skills.backend.map((tool, index) => (
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

          <div className={styles.techStack}>
            <span className={styles.technologieTitle}>Datenbanken</span>
            {skills.datenbanken.map((web, index) => (
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
            <span className={styles.technologieTitle}>DevOps & Tools</span>
            {skills.devOps_Tools.map((tool, index) => (
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
          {projects.map((project, index) => (
            <div key={index} className={styles.projectContainer}>
              {project.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={project.name}
                  className={
                    imgIndex === 0 ? styles.projectImage0 : styles.projectImage1
                  }
                />
              ))}
              <div className={styles.projectDescription}>
                {project.logo && (
                  <img
                    className={styles.projectLogo}
                    src={project.logo}
                    alt={project.name}
                  />
                )}
                {!project.logo && (
                  <span className={styles.projectTitle}>{project.name}</span>
                )}
                <span className={styles.projectDescriptionText}>
                  {project.description}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  besuchen
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
