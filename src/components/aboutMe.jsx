import { Link } from 'react-router';
import blackAndWhiteMe from '../assets/images/black_and_white_me.jpg';
import blackAndWhiteMeWebp from '../assets/images/black_and_white_me.webp';
import resume from '../assets/PDFs/resume.pdf';

function AboutMe() {
    return (
        <section id="about-me" className="py-6 py-md-8">
            <div className="container hiddenAndPushedDown">
                <div className="header pb-6 pb-md-7 d-flex justify-content-center flex-column align-items-center">
                    <h2 className="display-6 fw-normal">ABOUT ME</h2>
                    <span className="header-highlight" />
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="d-flex h-100 align-items-start justify-content-center">
                            <picture>
                                <source srcSet={blackAndWhiteMeWebp} />
                                <img
                                    src={blackAndWhiteMe}
                                    className="img-fluid rounded mb-5 mb-lg-0 mx-auto"
                                    alt="Picture of John"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="d-flex h-100 flex-column">
                            <h4 className="bolder">Who am I ?</h4>
                            <p className="lead">
                                Hey there! I'm John Suyang, a passionate Full-Stack Web Developer from Philippines who
                                loves creating web experiences that are clean, responsive, and enjoyable to use. I've
                                worked on both the front-end and back-end. I enjoy solving problems, experimenting with
                                new ideas, and finding smarter, cleaner ways to make things work. For me, writing code
                                isn't just about functionality — it's about crafting something that feels good to use
                                and even better to build
                            </p>
                            <p className="lead">
                                Outside of coding, I'm a lifelong learner who loves exploring new technologies. You’ll
                                often find me watching YouTube tutorials, reading developer blogs, or taking courses on
                                Udemy (yep, I'm making the most of that subscription 😄).I enjoy understanding how
                                things work under the hood and applying what I learn to improve my projects. I'm always
                                excited about things that make me grow as a developer and creating meaningful projects
                                that make an impact in the real world.
                            </p>
                            <Link to={resume} download="JohnSuyangResume.pdf" target="_blank">
                                <button className="btn btn-primary text-white w-100 mt-auto">Download Resume</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
