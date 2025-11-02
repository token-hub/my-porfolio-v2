import Footer from '../components/footer';
import Navbar from '../components/navbar';
import BackToTop from '../components/backToTop';
import { sectionAnimation } from '../lib/animations';
import { useEffect } from 'react';

function Base({ children }) {
    useEffect(() => {
        sectionAnimation('hiddenAndPushedDown');
    }, []);

    return (
        <>
            <BackToTop />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Base;
