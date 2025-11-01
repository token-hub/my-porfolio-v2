import Navbar from './components/navbar';
import Introduction from './components/introduction';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Skills from './components/skills';
import Certificates from './components/certificates';

function App() {
    return (
        <>
            <Navbar />
            <Introduction />
            <AboutMe />
            <Projects />
            <Skills />
            <Certificates />
        </>
    );
}

export default App;
