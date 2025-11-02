import blackAndWhiteMe from '../assets/images/black_and_white_me.jpg';
import blackAndWhiteMeWebp from '../assets/images/black_and_white_me.webp';

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
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure repellat ipsum modi
                                aliquam perspiciatis. Vel cumque aperiam cum quisquam numquam cupiditate voluptatibus,
                                obcaecati, doloremque repellat quia assumenda tempore quos distinctio. Lorem ipsum dolor
                                sit, amet consectetur adipisicing elit. Iure repellat ipsum modi aliquam perspiciatis.
                                Vel cumque aperiam cum quisquam numquam cupiditate voluptatibus, obcaecati, doloremque
                                repellat quia assumenda tempore quos distinctio.
                            </p>
                            <p className="lead">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure repellat ipsum modi
                                aliquam perspiciatis. Vel cumque aperiam cum quisquam numquam cupiditate voluptatibus,
                                obcaecati, doloremque repellat quia assumenda tempore quos distinctio. Lorem ipsum dolor
                                sit, amet consectetur adipisicing elit. Iure repellat ipsum modi aliquam perspiciatis.
                                Vel cumque aperiam cum quisquam numquam cupiditate voluptatibus, obcaecati, doloremque
                                repellat quia assumenda tempore quos distinctio.
                            </p>
                            <button className="btn btn-lg btn-primary text-white w-100 mt-auto">Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
