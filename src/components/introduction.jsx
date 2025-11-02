import { useEffect, useRef } from 'react';
import me3d from '../assets/images/3dme.png';
import me3dWebp from '../assets/images/3dme.webp';
import { blingkingCursor, animatedTextEvent } from '../lib/animations';

function Introduction() {
    const blingkingRef = useRef();
    const animatedTextRef = useRef();

    useEffect(() => {
        let intervalId = blingkingCursor(blingkingRef.current);
        const { forwardTimeoutId, backwardTimeoutId } = animatedTextEvent(animatedTextRef.current, 'John Suyang');

        return () => {
            clearInterval(intervalId);
            clearTimeout(forwardTimeoutId);
            clearTimeout(backwardTimeoutId);
        };
    }, []);

    return (
        <section id="introduction" className="d-flex align-items-center justify-content-center">
            <div className="background" />
            <div className="container">
                <div className="d-flex h-100 align-items-center flex-column">
                    <picture>
                        <source srcSet={me3dWebp} />
                        <img src={me3d} width={250} className="mb-2" alt="3D image of John Suyang" />
                    </picture>
                    <h1 className="display-4 display-md-1 fw-semibold">Hello there! I am,</h1>
                    <div className="d-flex align-items-center" style={{ height: '2rem' }}>
                        <h1 ref={animatedTextRef} className="display-5 display-md-1 text-primary animetedText" />
                        <h1 ref={blingkingRef} className="blinking_cursor text-primary invisible">
                            |
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduction;
