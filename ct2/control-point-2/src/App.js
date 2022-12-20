import './App.scss';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Projects />
      <Process />
      <Testimonials />
      <Services />
    </>
  )
}

export default App;
