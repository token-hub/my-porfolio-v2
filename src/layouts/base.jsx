import Footer from '../components/footer';
import Navbar from '../components/navbar';

function Base({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Base;
