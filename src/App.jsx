import Introduction from './components/introduction';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Skills from './components/skills';
import Certificates from './components/certificates';
import ContactMe from './components/contactMe';
import BaseLayout from './layouts/base';

function App() {
    return (
        <BaseLayout>
            <Introduction />
            <AboutMe />
            <Projects />
            <Skills />
            <Certificates />
            <ContactMe />
        </BaseLayout>
    );
}

export default App;
