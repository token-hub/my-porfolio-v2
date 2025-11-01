import Navbar from './components/navbar';
import Introduction from './components/introduction';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Skills from './components/skills';
import Certificates from './components/certificates';
import ContactMe from './components/contactMe';
import Footer from './components/footer';

function App() {
    return (
        <>
            <Navbar />
            <Introduction />
            <AboutMe />
            <Projects />
            <Skills />
            <Certificates />
            <ContactMe />
            <Footer />
        </>
    );
}

export default App;
