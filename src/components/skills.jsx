import JavascriptLogo from '../assets/images/skills/javascript.png';
import HTML5Logo from '../assets/images/skills/html5.png';
import CSS3Logo from '../assets/images/skills/css3.png';
import SassLogo from '../assets/images/skills/sass.png';
import WebpackLogo from '../assets/images/skills/webpack.png';
import BootstrapLogo from '../assets/images/skills/bootstrap.png';
import GitLogo from '../assets/images/skills/git.png';
import GithubLogo from '../assets/images/skills/github.png';
import ReactLogo from '../assets/images/skills/react.png';
import ReduxLogo from '../assets/images/skills/redux.png';
import TypescriptLogo from '../assets/images/skills/typescript.png';
import NodejsLogo from '../assets/images/skills/nodejs.png';
import MongodbLogo from '../assets/images/skills/mongodb.png';
import MysqlLogo from '../assets/images/skills/mysql.png';
import NginxLogo from '../assets/images/skills/nginx.png';
import ExpressLogo from '../assets/images/skills/express.png';
import NpmLogo from '../assets/images/skills/npm.png';

import Skill from './skill';

const skills = [
    { image: JavascriptLogo, alt: 'Javascript Logo', skill: 'javascript' },
    { image: HTML5Logo, alt: 'Html5 Logo', skill: 'html5' },
    { image: CSS3Logo, alt: 'CSS3 Logo', skill: 'css3' },
    { image: SassLogo, alt: 'Sass Logo', skill: 'sass' },
    { image: WebpackLogo, alt: 'Webpack Logo', skill: 'webpack' },
    { image: BootstrapLogo, alt: 'Bootstrap Logo', skill: 'bootstrap' },
    { image: GithubLogo, alt: 'Github Logo', skill: 'github' },
    { image: GitLogo, alt: 'Git Logo', skill: 'git' },
    { image: ReactLogo, alt: 'React Logo', skill: 'react' },
    { image: TypescriptLogo, alt: 'Typescript Logo', skill: 'typescript' },
    { image: ReduxLogo, alt: 'Redux Logo', skill: 'redux' },
    { image: NodejsLogo, alt: 'NodeJS Logo', skill: 'nodejs' },
    { image: MongodbLogo, alt: 'Mongodb Logo', skill: 'mongodb' },
    { image: MysqlLogo, alt: 'Mysql Logo', skill: 'mysql' },
    { image: NginxLogo, alt: 'Nginx Logo', skill: 'nginx' },
    { image: ExpressLogo, alt: 'Express Logo', skill: 'express' },
    { image: NpmLogo, alt: 'Npm Logo', skill: 'npm' }
];

function Skills() {
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
