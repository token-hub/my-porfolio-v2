import { Link, useParams } from 'react-router';
import { firstLetterUpperCase } from '../lib/utilities';
import { getViewProjectDetails } from '../lib/projects';
import Badges from '../components/badges';

function Project() {
    const params = useParams();
    const projectDetails = getViewProjectDetails(params.project);

    if (!projectDetails) {
        return (
            <section id="project-header" className="first-section project-section">
                <h1 className="text-center mt-5">Selected project not found</h1>;
            </section>
        );
    }

    const { badges, liveDemoLink, sourceCodeLink, imageWebp, image, name, overview, features, displayName } =
        projectDetails;

    return (
        <>
            <section id="project-header" className="first-section project-section">
                <div className="container">
                    <div className="background" />
                    <div className="row justify-content-center">
                        <div className="text-center mt-5">
                            <h1 className="display-4 display-md-1 fw-semibold">{firstLetterUpperCase(displayName)}</h1>
                            <Badges badges={badges} />
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <Link to={liveDemoLink} target="_blank" className="btn btn-primary">
                                Live Demo
                            </Link>
                            <Link to={sourceCodeLink} target="_blank" className="btn btn-outline-primary ms-2">
                                View source code
                            </Link>
                        </div>
                        <div className="col-md-7 my-5">
                            <picture>
                                <source srcSet={imageWebp} />
                                <img src={image} className="card-img-top" alt={name} />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
            <section id="overviewFeatures" className="pt-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-2 my-4">
                            <h2 className="fs-2 fw-bold">Project Overview</h2>
                            <div className="mt-3">
                                {overview.length > 0 &&
                                    overview.map((data, index) => {
                                        return (
                                            <p key={index} className="lead">
                                                {firstLetterUpperCase(data)}
                                            </p>
                                        );
                                    })}
                            </div>
                            <div className="mt-5">
                                <h2 className="fs-2 fw-bold">Features</h2>
                                <div className="my-3">
                                    <ul className="list-group list-group-flush">
                                        {features.length > 0 &&
                                            features.map((feature, index) => {
                                                return (
                                                    <li key={index} className="list-group-item lh-lg">
                                                        {firstLetterUpperCase(feature)}
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Project;
