import styles from "./portfolio.module.css";

const technologies = [
    {
      name: "Angular",
      image: "techStackIcons/angular.png",
    },
    {
      name: "CSS",
      image: "techStackIcons/css3.png",
    },
    {
      name: "Docker",
      image: "techStackIcons/docker.png",
    },
    {
      name: "Figma",
      image: "techStackIcons/figma.png",
    },
    {
      name: "GitHub",
      image: "techStackIcons/github.png",
    },
    {
      name: "GitLab",
      image: "techStackIcons/gitlab.png",
    },
    {
      name: "HTML",
      image: "techStackIcons/html5.png",
    },
    {
      name: "Java",
      image: "techStackIcons/java.png",
    },
    {
      name: "Java Script",
      image: "techStackIcons/js.png",
    },
    {
      name: "Node.js",
      image: "techStackIcons/nodejs.png",
    },
    {
      name: "Postgresql",
      image: "techStackIcons/postgresql.png",
    },
    {
      name: "Postman",
      image: "techStackIcons/postman.png",
    },
    {
      name: "python",
      image: "techStackIcons/python.png",
    },
    {
      name: "React",
      image: "techStackIcons/reactjs.png",
    },
    {
      name: "TypeScript",
      image: "techStackIcons/typescript.png",
    },
    {
      name: "Visual Studio Code",
      image: "techStackIcons/vscode.png",
    },
  ];

export const Portfolio = () => {
  return (
    <div className={styles.background}>
        <div className={styles.header}>
            <img src="jonas.JPEG" alt="" className={styles.headerImage} />
            <div className={styles.headerBox}>
                <span className={styles.headerTitle}>Jonas Neu</span>
                <span className={styles.headerSubTitle}>Software Engineering Student</span>
            
                <span className={styles.headerText}>Herzlich willkommen auf meinem Portfolio! Ich lade Sie ein, weiterzuscrollen, um mehr über meine gesammelten Erfahrungen in der Softwareentwicklung sowie die Technologien und Projekte zu erfahren, die ich im Laufe meines Studiums erfolgreich umgesetzt habe.</span>
            </div>
        </div>
        <div className={styles.pager}>
            <div className={styles.technologiesBox}>
                <span className={styles.headerSubTitle}>Technologieen</span>
                <div className={styles.techStack}>
                {technologies.map((tech, index) => (
                    <div key={index} className={styles.techStackItem}>
                    <img
                        src={tech.image}
                        alt={tech.name}
                        className={styles.techStackImage}
                    />
                    </div>
                ))}
                    </div>
            </div>
        </div>
    </div>
  );
};

export default Portfolio;
