function Certificate({
    imageSmWebp,
    imageLgWebp,
    imageDefault,
    alt = 'image of online certificate',
    belongsToViewMore = false
}) {
    return (
        <div className={`certificate mb-3 animated-certificate ${belongsToViewMore ? 'd-none fade-slide' : ''}`}>
            <a href={imageDefault} target="_blank">
                <picture>
                    <source media="(max-width:576px)" srcSet={imageSmWebp} />
                    <source media="(min-width:577px)" srcSet={imageLgWebp} />
                    <img src={imageDefault} alt={alt} className="rounded" />
                </picture>
            </a>
        </div>
    );
}

export default Certificate;
