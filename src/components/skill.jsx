function Skill({ image, alt, skill, belongsToViewMore = false }) {
    return (
        <div
            className={`skill-container d-flex justify-content-center mb-3 animated-skill  ${
                belongsToViewMore ? 'd-none fade-slide' : ''
            }`}
        >
            <div className="skill d-flex align-items-center justify-content-center bg-light border rounded p-3">
                <div className="skill__logo">
                    <img src={image} alt={alt} />
                </div>
                <span className="skill__title ps-2 text-capitalize">{skill}</span>
            </div>
        </div>
    );
}

export default Skill;
