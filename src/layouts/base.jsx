import Footer from '../components/footer';
import Navbar from '../components/navbar';
import BackToTop from '../components/backToTop';
import { sectionAnimation } from '../lib/animations';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

function Base() {
    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
        sectionAnimation('hiddenAndPushedDown');
    }, [hash]);

    return (
        <>
            <BackToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Base;
