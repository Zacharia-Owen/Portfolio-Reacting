export default function Portfolio() {
    const projects = [
      { title: "", link: "", repo: "" },
      { title: "", link: "", repo: "" },

    ];
  
    return (
      <section>
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <a href={project.link} target="" rel="">Live Demo</a>
              <a href={project.repo} target="" rel="">GitHub Repo</a>
            </div>
          ))}
        </div>
      </section>
    );
  }