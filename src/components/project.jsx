import { Link } from 'react-router';

function Project({
    image = 'https://placehold.co/600x400?text=Coming+Soon',
    imageWebp = {
        sm: '',
        lg: ''
    },
    name = '',
    description = '',
    belongsToViewMore = false,
    viewProjectLink = ''
}) {
    return (
        <div className={`col-md-6 animated-project ${belongsToViewMore ? 'd-none fade-slide' : ''}`}>
            <Link to={viewProjectLink} className="link-underline link-underline-opacity-0">
                <div className="card project border-0 shadow-sm mb-4">
                    <div className="position-relative">
                        <picture>
                            {imageWebp.sm && <source media="(max-width:576px)" srcSet={imageWebp.sm} />}
                            {imageWebp.lg && <source media="(min-width:577px)" srcSet={imageWebp.lg} />}
                            <img src={image} alt={name} className="card-img-top" />
                        </picture>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-primary">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Project;
