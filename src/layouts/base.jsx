import Footer from '../components/footer';
import Navbar from '../components/navbar';
import BackToTop from '../components/backToTop';
import { sectionAnimation } from '../lib/animations';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import ToastProvider from '../contexts/toastContext';
import Toasts from '../components/toast/toasts';

function Base() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        const observer = sectionAnimation('hiddenAndPushedDown');
        if (hash) {
            const element = document.querySelector(hash);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
            return;
        }

        if (pathname) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [hash, pathname]);

    return (
        <>
            <ToastProvider>
                <Toasts />
                <BackToTop />
                <Navbar />
                <Outlet />
                <Footer />
            </ToastProvider>
        </>
    );
}

export default Base;
