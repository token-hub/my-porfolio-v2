import Project from './project';
import { getProjects } from '../lib/projects';
import { viewMore } from '../lib/animations';

const projects = getProjects();

function Projects() {
    const hasViewMore = projects.some((p) => p.belongsToViewMore);
    return (
        <section id="projects" className="py-6 py-md-8 bg-light">
            <div className="container hiddenAndPushedDown">
                <div className="header pb-6 pb-md-7 d-flex justify-content-center flex-column align-items-center">
                    <h2 className="display-6 fw-normal">PROJECTS</h2>
                    <span className="header-highlight" />
                    <p className="lead mt-4 text-center">
                        These are the personal projects that I have worked on, I hope you will like it too.
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            className="bi bi-emoji-smile"
                            viewBox="0 0 18 18"
                        >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                        </svg>
                    </p>
                </div>
                <div className="row">
                    {projects.map((project) => {
                        return <Project key={project.name} {...project} />;
                    })}

                    <button
                        id="project-view-more"
                        className={`project_toggler mt-5 fw-semibold text-primary bg-white p-3 rounded border border-primary ${
                            hasViewMore ? '' : 'd-none'
                        }`}
                        style={{ width: 150, margin: '0 auto' }}
                        type="button"
                        aria-label="Toggle project view more"
                        onClick={() => viewMore('#project-view-more', '.animated-project.fade-slide')}
                    >
                        View more
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;
