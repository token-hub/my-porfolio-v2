import { useParams } from 'react-router';
function Project() {
    const params = useParams();

    const projectName = params.project[0].toUpperCase() + params.project.slice(1);

    return (
        <div className="first-section project-section">
            <div className="container">
                <div className="background" />
                <div className="row">
                    <div className="text-center mt-5">
                        <h1 className="display-4 display-md-1 fw-semibold">{projectName}</h1>
                        <div className="d-flex justify-content-center mt-3">
                            <span class="badge fs-6 border-gray border text-gray rounded-pill  p-2 mx-1">React</span>
                            <span class="badge fs-6 border-gray border text-gray rounded-pill  p-2 mx-1">Node</span>
                            <span class="badge fs-6 border-gray border text-gray rounded-pill  p-2 mx-1">
                                Bootstrap
                            </span>
                            <span class="badge fs-6 border-gray border text-gray rounded-pill  p-2 mx-1">Mongodb</span>
                            <span class="badge fs-6 border-gray border text-gray rounded-pill  p-2 mx-1">
                                Amazon EC2
                            </span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-primary">Live Demo</button>

                        <button className="btn btn-outline-primary ms-2">View source code</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
