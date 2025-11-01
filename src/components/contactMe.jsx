function ContactMe() {
    return (
        <section id="contact-me" className="py-6 py-md-8 bg-white">
            {/* <div className="container hiddenAndPushedDown"> */}
            <div className="container ">
                <div className="header pb-6 pb-md-7 d-flex justify-content-center flex-column align-items-center">
                    <h2 className="display-6 fw-normal">CONTACT ME</h2>
                    <span className="header-highlight" />
                    <p className="lead mt-4 text-center">
                        Want to discuss potential opportunities? I'd love to hear from you!
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-suit-heart-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                        </svg>
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="bg-white p-5 rounded shadow">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="form-control"
                                        id="name"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="form-control"
                                        id="email"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="Your message"
                                        className="form-control"
                                        id="floatingTextarea2"
                                        style={{ height: 100 }}
                                        defaultValue={''}
                                    />
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary text-white w-100 mt-auto">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;
