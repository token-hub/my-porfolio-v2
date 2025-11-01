import Certificate from './certificate';
import { certificates } from '../lib/certificates';

function Certificates() {
    return (
        <section id="certificates" className="py-6 py-md-8 bg-light">
            {/* <div className="container hiddenAndPushedDown"> */}
            <div className="container">
                <div className="header pb-6 pb-md-7 d-flex justify-content-center flex-column align-items-center">
                    <h2 className="display-6 fw-normal">CERTIFICATES</h2>
                    <span className="header-highlight"></span>
                    <p className="lead mt-4 text-center">
                        Here are some online certificates I got from griding online tutorials.
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-person-video2"
                            viewBox="0 0 16 16"
                        >
                            <path d="M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                            <path d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM1 3a1 1 0 0 1 1-1h2v2H1zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3zm-4-2h3v2H2a1 1 0 0 1-1-1zm3-1H1V8h3zm0-3H1V5h3z" />
                        </svg>
                    </p>
                </div>

                <div className="row justify-content-center">
                    {certificates.map((certificate) => {
                        return <Certificate key={certificate.alt} {...certificate} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default Certificates;
