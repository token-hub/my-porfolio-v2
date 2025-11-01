import { useRef, useEffect } from 'react';

function BackToTop() {
    const backToTopRef = useRef();

    useEffect(() => {
        const targetButton = backToTopRef.current;
        if (!targetButton) return;

        const handleScroll = () => {
            if (window.scrollY > 100) {
                targetButton.classList.remove('invisible');
            } else {
                targetButton.classList.add('invisible');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div
            ref={backToTopRef}
            onClick={handleClick}
            className="backToTop d-flex justify-content-center align-items-center invisible"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                className="bi bi-caret-up-fill"
                viewBox="0 0 16 16"
            >
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
        </div>
    );
}

export default BackToTop;
