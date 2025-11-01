import Footer from '../components/footer';
import Navbar from '../components/navbar';
import BackToTop from '../components/backToTop';

function Base({ children }) {
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
