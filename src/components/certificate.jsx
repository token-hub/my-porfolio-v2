function Certificate({ imageSmWebp, imageLgWebp, imageDefault, alt = 'image of online certificate' }) {
    return (
        <div className="certificate mb-3">
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
