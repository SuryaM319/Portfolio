import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Internships from './sections/Internships';
import Achievements from './sections/Achievements';
import Languages from './sections/Languages';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Skills />
        <Certifications />
        <Internships />
        <Achievements />
        <Languages />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;