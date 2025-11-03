import Footer from '../components/footer';
import Navbar from '../components/navbar';
import BackToTop from '../components/backToTop';
import { sectionAnimation } from '../lib/animations';
import { useEffect } from 'react';
import { Outlet } from 'react-router';

function Base() {
    useEffect(() => {
        sectionAnimation('hiddenAndPushedDown');
    }, []);

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
