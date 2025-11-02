import Skill from './skill';
import { getSkills } from '../lib/skills';
import { viewMore } from '../lib/animations';

const skills = getSkills(6);

function Skills() {
    const hasViewMore = skills.some((p) => p.belongsToViewMore);
    return (
        <section id="skills" className="py-6 py-md-8">
            <div className="container hiddenAndPushedDown">
                <div className="header pb-6 pb-md-7 d-flex justify-content-center flex-column align-items-center">
                    <h2 className="display-6 fw-normal">SKILLS</h2>
                    <span className="header-highlight" />
                    <p className="lead mt-4 text-center">Frameworks/libraries/tools that I use for my projects</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="row justify-content-center">
                            {skills.map((skill) => {
                                return <Skill key={skill.skill} {...skill} />;
                            })}

                            <button
                                id="skills-view-more"
                                className={`project_toggler mt-5 fw-semibold text-primary bg-white p-3 rounded border border-primary ${
                                    hasViewMore ? '' : 'd-none'
                                }`}
                                style={{ width: 150, margin: '0 auto' }}
                                type="button"
                                aria-label="Toggle project view more"
                                onClick={() => viewMore('#skills-view-more', '.animated-skill.fade-slide')}
                            >
                                View more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
